import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import GoogleButton from '../Components/GoogleButton';
import LoginImage from './components/Image';
import WelcomeText from './components/Text';

function Login() {
  const navigate = useNavigate();
  function onLoginHandler() {
    navigate('/home');
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.content}>
        <WelcomeText />
        <GoogleButton onLogin={onLoginHandler} />
      </Box>
      <LoginImage />
    </Box>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '40px',
    gap: '80px',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
  },
  content: { flex: 1 },
};

export default Login;
