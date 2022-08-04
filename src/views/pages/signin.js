import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <>
      <main>
        <h2>Welcome to the Signin page!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">home</Link>
      </nav>
    </>
  );
}
