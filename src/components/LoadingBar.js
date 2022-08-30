import { Stack } from '@mui/system';

import LinearProgress from '@mui/material/LinearProgress';

const LoadingBar = (props) => {
  return (
    <Stack>
      {props.isLoading && <LinearProgress sx={{ width: '100%' }} />}
      {props.children}
    </Stack>
  );
};

export default LoadingBar;
