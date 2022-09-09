import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import CreateCard from '../../components/CreateCard';
import ResumeCard from '../../components/ResumeCard';

const ResumeRepository = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h7" component="div" fontWeight={550} sx={{ flexGrow: 1 }} mb={4}>
        {t('resume_repository')}
      </Typography>
      <Grid container spacing={5} pl={5} pr={5}>
        <Grid item>
          <ResumeCard />
        </Grid>
        <Grid item>
          <ResumeCard />
        </Grid>
        <Grid item>
          <ResumeCard />
        </Grid>
        <Grid item>
          <ResumeCard />
        </Grid>
        <Grid item>
          <CreateCard />
        </Grid>
      </Grid>
    </>
  );
};

export default ResumeRepository;
