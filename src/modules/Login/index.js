import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import _ from 'underscore';

import GoogleButton from '../../components/GoogleButton';
import WelcomeText from './components/Text';
import store from '../../store';
import { setUser, getUserInfo } from '../../store/user';
import welcomeImg from '../../assets/images/welcome-image.svg';

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
    <div className="loginContainer">
      <div className="loginContent">
        <WelcomeText />
        <GoogleButton onLogin={() => login()} />
      </div>
      <div className="loginImage">
        <img src={welcomeImg} alt="Discover the Globant experience!" />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  user: store.user,
});

export default connect(mapStateToProps)(Login);
