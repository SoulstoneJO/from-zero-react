import { Routes, Route } from 'react-router-dom';
import Home from './views/pages/home';
import Signin from './views/pages/signin';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </>
  );
}
