import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LoginButton from '../common/LoginButton';
import LogoutButton from '../common/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/RenderLandingPage.less';

const { primary_accent_color } = colors;

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
function HeaderContent() {
  const { isAuthenticated } = useAuth0();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}
      >
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Graphs
        </Link>
        {isAuthenticated ? (
          <Link
            to="/profile"
            className="nav-links"
            style={{ color: '#E2F0F7', paddingRight: '75px' }}
          >
            Profile
          </Link>
        ) : null}
        <AuthenticationButton />
      </div>
    </div>
  );
}

export { HeaderContent };
