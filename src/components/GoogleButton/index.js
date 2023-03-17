import { ReactComponent as GoogleLogo } from '../../assets/images/googleLogo.svg';

function GoogleButton({ onLogin }) {
  return (
    <button className="googleButton" onClick={onLogin}>
      <GoogleLogo />
      <span>Log in with Google</span>
    </button>
  );
}

export default GoogleButton;
