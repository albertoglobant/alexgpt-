import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Channel from './components/Channel';
import Chat from './components/Chat';
//import { getAnswer } from '../../api/openAIrequest';

function Home({ userInfo }) {
  const { state } = useLocation();

  useEffect(() => {
    // getAnswer('user', 'create a user story for login');
  }, []);

  return (
    <>
      <NavBar
        product={state.product}
        avatar={userInfo.picture}
        userName={userInfo.given_name}
      />
      <div style={styles.mainWrapper}>
        <Channel product={state.product} />
        <Chat avatar={userInfo.picture} />
      </div>
    </>
  );
}

const mapStateToProps = (store) => ({
  userInfo: store.userInfo,
});

const styles = {
  mainWrapper: {
    height: '100%',
    display: 'flex',
  },
};

export default connect(mapStateToProps)(Home);
