import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import GoogleButton from '../../Components/GoogleButton';
import WelcomeText from './components/Text';
import store from '../../store';
import { setUser, getUserInfo } from '../../store/user';
import welcomeImg from '../../assets/images/welcome-image.svg';
import { useNavigate } from 'react-router-dom';

function Login({ user }) {
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        store.dispatch(setUser(codeResponse.access_token));
      },
      onError: (err) => console.log('err ==>', err),
    }),
    navigate = useNavigate();

  useEffect(() => {
    if (user.access_token && _.isEmpty(user.userInfo)) {
      store
        .dispatch(getUserInfo(user.access_token))
        .then(() => navigate('/home'));
    }
  }, [user]);
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <WelcomeText />
        <GoogleButton onLogin={() => login()} />
      </div>
      <div style={styles.imgWrapper}>
        <img
          src={welcomeImg}
          style={styles.img}
          alt="Discover the Globant experience!"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: '40px',
  },
  contentWrapper: {
    display: 'flex',
    flex: 1,
    height: '100%',
    flexFlow: 'column',
    justifyContent: 'center',
    width: '50%',
  },
  imgWrapper: {
    width: '50%',
  },
  img: {
    width: '100%',
  },
};

const mapStateToProps = (store) => ({
  user: store.user,
});

export default connect(mapStateToProps)(Login);
