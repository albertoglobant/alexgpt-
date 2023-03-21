import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Channel from './components/Channel';
import Chat from './components/Chat';

function Home({ userInfo }) {
  const { state } = useLocation();

  state && console.log('location', state.product);

  return (
    <>
      <NavBar
        title="UI Engineering"
        avatar={userInfo.picture}
        userName={userInfo.given_name}
      />
      <div style={styles.mainWrapper}>
        <Channel />
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
