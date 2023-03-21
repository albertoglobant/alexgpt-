import { ReactComponent as GoogleLogo } from '../../assets/images/googleLogo.svg';

function GoogleButton({ onLogin, isLoggedIn }) {
  return (
    <button className="googleButton" onClick={onLogin}>
      <GoogleLogo />
      <span>{isLoggedIn ? 'Log out' : 'Log in with Google'}</span>
    </button>
  );
}

export default GoogleButton;
