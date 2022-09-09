import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Copyright from '../../components/Copyright';
import LoadingBar from '../../components/LoadingBar';
import CommonBar from '../../components/CommonBar';
import PasswordTextField from '../../components/PasswordTextField';
import VerificationCodeField from '../../components/VerificationCodeField';
import { singleValidate, messageValidate, validate } from '../../lib/validation';
import { resetPasswordNotificationApi } from '../../api';
import SnackBar from '../../components/SnackBar';
import { useAuth } from '../../components/AuthProvider';

const ResetPassword = () => {
  const { t } = useTranslation();
  const { onResetPassword } = useAuth();
  const [onLoading, setOnLoading] = useState(false);
  const [data, setData] = useState({
    mail: '',
    newPassword: '',
    verificationCode: '',
  });
  const [validation, setValidation] = useState({
    mail: { error: false, message: '' },
    newPassword: { error: false, message: '' },
    verificationCode: { error: false, message: '' },
  });
  const [alert, setAlert] = useState({
    open: false,
    severity: 'info',
    message: '',
  });

  const handleChange = (name, param, ruleArray) => {
    setData({ ...data, [name]: param });
    setValidation({ ...validation, [name]: singleValidate(param, ruleArray) });
  };

  const checkMail = () => {
    // check mail
    if (messageValidate(data.mail, ['mail_not_null', 'mail_check'])) {
      return true;
    } else {
      setAlert({ open: true, severity: 'error', message: t('mail_error') });
      return false;
    }
  };

  const sendValidationMail = async () => {
    try {
      await resetPasswordNotificationApi({
        mail: data.mail,
      });
      setAlert({ open: true, severity: 'success', message: t('send_notification_success') });
    } catch (error) {
      setAlert({ open: true, severity: 'error', message: t(error.code) });
    }
  };

  const handleSubmit = async () => {
    const validateResult = validate([
      { name: 'mail', param: data.mail, ruleArray: ['mail_not_null', 'mail_check'] },
      { name: 'newPassword', param: data.newPassword, ruleArray: ['password_not_null', 'password_check'] },
      { name: 'verificationCode', param: data.verificationCode, ruleArray: ['code_not_null', 'max_07'] },
    ]);

    setValidation(validateResult);

    for (const key in validation) {
      if (validation[key].error) {
        setAlert({ open: true, severity: 'error', message: t('validation_text', { key }) });
        return;
      }
    }

    const before = new Date();
    setOnLoading(true);
    try {
      await onResetPassword(data.mail, data.newPassword, data.verificationCode);
    } catch (error) {
      setOnLoading(false);
      setAlert({ open: true, severity: 'error', message: t(error.code) });
    }
    const after = new Date();
    let interval = after - before;
    if (interval < 800) {
      interval = 800 - interval;
      setTimeout(() => {
        setOnLoading(false);
      }, interval);
    } else {
      setOnLoading(false);
    }
  };

  return (
    <LoadingBar isLoading={onLoading}>
      <CommonBar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('reset_password')}
          </Typography>
          <Box component="form" sx={{ mt: 1, width: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mail"
                  label={t('mail_address')}
                  value={data.mail}
                  helperText={t(validation.mail.message)}
                  error={validation.mail.error}
                  name="mail"
                  autoComplete="email"
                  onChange={(e) => handleChange(e.target.name, e.target.value, ['mail_not_null', 'mail_check'])}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordTextField
                  label={t('new_password')}
                  name="newPassword"
                  value={data.newPassword}
                  helperText={t(validation.newPassword.message)}
                  error={validation.newPassword.error}
                  onChange={(e) => handleChange(e.target.name, e.target.value, ['password_not_null', 'password_check'])}
                />
              </Grid>
              <VerificationCodeField
                label={t('verification_code')}
                value={data.verificationCode}
                error={validation.verificationCode.error}
                onChange={(e) => handleChange(e.target.name, e.target.value, ['code_not_null', 'max_07'])}
                onCheckMail={checkMail}
                sendValidationMail={sendValidationMail}
              />
            </Grid>
            <Button fullWidth variant="contained" onClick={handleSubmit} sx={{ mt: 3, mb: 2 }}>
              {t('reset_password')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="signin" variant="body2">
                  {t('go_sign_in_text')}
                </Link>
              </Grid>
              <Grid item>
                <Link href="signup" variant="body2">
                  {t('go_sign_up_text')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <SnackBar
          open={alert.open}
          message={alert.message}
          severity={alert.severity}
          handleClose={() => {
            setAlert({ ...alert, open: false, message: '' });
          }}
        />
      </Container>
    </LoadingBar>
  );
};

export default ResetPassword;
