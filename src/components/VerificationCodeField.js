import { Button, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useEffect } from 'react';
import { clearStorageItem, loadStorageItem, saveStorageItem, timerKey } from '../lib/handler';
import { useRef } from 'react';
import { useState } from 'react';

const VerificationCodeField = (props) => {
  const [count, setCount] = useState(-1);
  const intervalRef = useRef();

  const setTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount(() => {
        let currentTime = new Date();
        let passTime = Math.floor((currentTime - new Date(loadStorageItem(timerKey))) / 1000);
        if (passTime >= 60) {
          clearStorageItem(timerKey);
          clearInterval(intervalRef.current);
          return -1;
        }
        return 60 - passTime;
      });
    }, 1000);
  };

  const handleClick = () => {
    if (count > 0) {
      return;
    }
    if (props.onCheckMail() === false) {
      return;
    }
    setCount(60);
    saveStorageItem(timerKey, new Date());
    setTimer();
    props.sendValidationMail();
  };

  useEffect(() => {
    let passTime = Math.floor((new Date() - new Date(loadStorageItem(timerKey))) / 1000);
    if (passTime < 60) {
      setCount(60 - passTime);
      setTimer();
    }
  }, []);

  return (
    <>
      <Grid item xs={12} sm={7}>
        <TextField
          name="verificationCode"
          required
          fullWidth
          id="verificationCode"
          label="verification code"
          value={props.value}
          error={props.error}
          inputProps={{
            style: { textAlign: 'center', color: 'green', fontWeight: 'bolder', letterSpacing: '5px' },
          }}
          onChange={props.onChange}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Button
          fullWidth
          variant="contained"
          sx={{ height: '98%' }}
          color="success"
          endIcon={<SendIcon />}
          onClick={handleClick}>
          {count < 0 ? 'SEND CODE' : `WAIT ${count} Sec`}
        </Button>
      </Grid>
    </>
  );
};

export default VerificationCodeField;
