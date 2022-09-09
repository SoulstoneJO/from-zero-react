import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ResumeSetting() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h7" component="div" fontWeight={550} sx={{ flexGrow: 1 }} mb={4}>
        {t('auth_setting')}
      </Typography>
    </>
  );
}
