import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <button
      style={{ backgroundColor: '#404C4A', color: '#FFFFFF', border: 'none' }}
      className="button__sign-up"
      onClick={handleSignUp}
    >
      Sign Up
    </button>
  );
};
