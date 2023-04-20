import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{ margin: '10%' }}>
        <h1>You are logged in, {user.name}</h1>
        <img src={user.picture} alt={user.name} />
        <p>Email: {user.email}</p>
      </div>
    )
  );
};
