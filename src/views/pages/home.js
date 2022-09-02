import { Button } from '@mui/material';
import { useAuth } from '../../components/AuthProvider';

export default function Home() {
  const { onLogout } = useAuth();

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <Button onClick={onLogout}>Sign out</Button>
    </>
  );
}
