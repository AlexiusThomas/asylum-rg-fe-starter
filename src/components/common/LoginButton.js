import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
    });
  };

  return (
    <button
      className="button__login"
      onClick={handleLogin}
      style={{ backgroundColor: '#404C4A', color: '#FFFFFF', border: 'none' }}
    >
      Log In
    </button>
  );
};
