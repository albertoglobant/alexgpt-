import MaterialButton from '@mui/material/Button';

import { ReactComponent as GoogleLogo } from '../../assets/images/googleLogo.svg';

function GoogleButton({ onLogin }) {
  return (
    <MaterialButton
      id="google-btn__login-form"
      color="secondary"
      variant="outlined"
      size="large"
      startIcon={<GoogleLogo />}
      sx={styles.googleButton}
      onClick={onLogin}
    >
      Log in with Google
    </MaterialButton>
  );
}

const styles = {
  googleButton: {
    backgroundColor: 'white',
    textTransform: 'none',
    paddingX: '80px',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white',
    },
  },
};

export default GoogleButton;
