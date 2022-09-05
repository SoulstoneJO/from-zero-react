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

import Copyright from '../../components/Copyright';
import { sendNotificationApi } from '../../api';
import { validate, singleValidate, messageValidate } from '../../lib/validation';
import PasswordTextField from '../../components/PasswordTextField';
import SnackBar from '../../components/SnackBar';
import { queryMessage } from '../../lib/message';
import VerificationCodeField from '../../components/VerificationCodeField';
import { useAuth } from '../../components/AuthProvider';
import LoadingBar from '../../components/LoadingBar';
import { useTranslation } from 'react-i18next';
import CommonBar from '../../components/CommonBar';

export default function SignUp() {
  const { t } = useTranslation();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    password: '',
    verificationCode: '',
  });
  const [validation, setValidation] = useState({
    firstName: { error: false, message: '' },
    lastName: { error: false, message: '' },
    mail: { error: false, message: '' },
    password: { error: false, message: '' },
    verificationCode: { error: false, message: '' },
  });
  const [alert, setAlert] = useState({
    open: false,
    severity: 'info',
    message: '',
  });
  const [onLoading, setOnLoading] = useState(false);
  const { onSignup } = useAuth();

  const handleChange = (name, param, ruleArray) => {
    setData({ ...data, [name]: param });
    setValidation({ ...validation, [name]: singleValidate(param, ruleArray) });
  };

  const checkMail = () => {
    // check mail
    if (messageValidate(data.mail, ['mail_not_null', 'mail_check'])) {
      return true;
    } else {
      setAlert({ open: true, severity: 'error', message: queryMessage('mail_error') });
      return false;
    }
  };

  const sendValidationMail = async () => {
    try {
      await sendNotificationApi({
        firstName: data.firstName,
        lastName: data.lastName,
        mail: data.mail,
        verificationCode: data.verificationCode,
      });
      setAlert({ open: true, severity: 'success', message: queryMessage('send_notification_success') });
    } catch (error) {
      setAlert({ open: true, severity: 'error', message: t(error.code) });
    }
  };

  const handleSubmit = async () => {
    const validateResult = validate([
      { name: 'firstName', param: data.firstName, ruleArray: ['first_name_not_null', 'max_20'] },
      { name: 'lastName', param: data.lastName, ruleArray: ['last_name_not_null', 'max_20'] },
      { name: 'mail', param: data.mail, ruleArray: ['mail_not_null', 'mail_check'] },
      { name: 'password', param: data.password, ruleArray: ['password_not_null', 'password_check'] },
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
      await onSignup(data.firstName, data.lastName, data.mail, data.password, data.verificationCode);
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
            {t('sign_up')}
          </Typography>
          <Box onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={t('firstName')}
                  value={data.firstName}
                  helperText={validation.firstName.message}
                  error={validation.firstName.error}
                  onChange={(e) => handleChange(e.target.name, e.target.value, ['first_name_not_null', 'max_20'])}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={t('lastName')}
                  value={data.lastName}
                  name="lastName"
                  helperText={validation.lastName.message}
                  error={validation.lastName.error}
                  onChange={(e) => handleChange(e.target.name, e.target.value, ['last_name_not_null', 'max_20'])}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mail"
                  label={t('mail_address')}
                  value={data.mail}
                  name="mail"
                  helperText={validation.mail.message}
                  error={validation.mail.error}
                  onChange={(e) => handleChange(e.target.name, e.target.value, ['mail_not_null', 'mail_check'])}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordTextField
                  label={t('password')}
                  value={data.password}
                  helperText={validation.password.message}
                  error={validation.password.error}
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
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => handleSubmit()}>
              {t('sign_up')}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signin" variant="body2">
                  {t('go_sign_in_text')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
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
}
