import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import Channel from './components/Channel';
import Chat from './components/Chat';

function Home({ userInfo }) {
  return (
    <>
      <NavBar avatar={userInfo.picture} title="UI Engineering" />
      <div style={styles.mainWrapper}>
        <Channel />
        <Chat avatar={userInfo.picture} />
      </div>
    </>
  );
}

const mapStateToProps = (store) => ({
  userInfo: store.user.userInfo,
});

const styles = {
  mainWrapper: {
    height: '100%',
    display: 'flex',
  },
};

export default connect(mapStateToProps)(Home);
