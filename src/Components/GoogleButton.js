import { ReactComponent as GoogleLogo } from '../assets/images/googleLogo.svg';

function GoogleButton({ onLogin }) {
  return (
    <button id="google-btn__login-form" style={styles.button} onClick={onLogin}>
      <GoogleLogo />
      <span style={styles.buttonText}>Log in with Google</span>
    </button>
  );
}

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: '5px',
    width: '60%',
  },
  buttonText: {
    marginLeft: '5px',
  },
};

export default GoogleButton;
