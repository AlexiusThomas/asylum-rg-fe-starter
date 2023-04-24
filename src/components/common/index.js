import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article className="profile-container">
        <img className="profile-image" src={user?.picture} alt={user?.name} />
        <h2 className="profile-name">{user?.name}</h2>
        <ul className="profile-details">
          {Object.entries(user ?? {}).map(([key, value], index) => (
            <li key={index} className="profile-item">
              <span className="profile-key">{key}: </span>
              <span className="profile-value">{value}</span>
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
