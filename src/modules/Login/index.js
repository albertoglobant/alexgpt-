import { Box } from '@mui/material';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import GoogleButton from '../../Components/GoogleButton';
import LoginImage from './components/Image';
import WelcomeText from './components/Text';
import store from '../../store';
import { setUser } from '../../store/user';
import { useNavigate } from 'react-router-dom';

function Login({ user }) {
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        store.dispatch(setUser({ access_token: codeResponse.access_token }));
      },
      onError: (err) => console.log('err ==>', err),
    }),
    navigation = useNavigate();

  useEffect(() => {
    if (user.access_token && !user.userInfo) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          store.dispatch(setUser({ userInfo: res.data }));
          navigation('/home');
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.content}>
        <WelcomeText />
        <GoogleButton onLogin={() => login()} />
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

const mapStateToProps = (store) => ({
  user: store.user,
});

export default connect(mapStateToProps)(Login);
