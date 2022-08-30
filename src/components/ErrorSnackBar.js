import { Alert, Slide, Snackbar } from '@mui/material';

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const ErrorSnackBar = (props) => {
  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.handleClose();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={props.open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackBar;
