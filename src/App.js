import { Routes, Route } from 'react-router-dom';
import Home from './views/pages/home';
import Signin from './views/pages/signin';
import SignUp from './views/pages/signup';
import ForgetPassword from './views/pages/forgetpassword';
import ResetPassword from './views/pages/resetpassword';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Routes>
    </ThemeProvider>
  );
}
