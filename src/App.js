import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './views/pages/Home';
import Signin from './views/pages/SignIn';
import SignUp from './views/pages/SignUp';
import ResetPassword from './views/pages/ResetPassword';
import AuthProvider from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import ResumePage from './views/homepages/ResumePage';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<ProtectedRoute children={<Home />} />} />
          <Route path="resume" element={<ProtectedRoute children={<ResumePage />} />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset_password" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
