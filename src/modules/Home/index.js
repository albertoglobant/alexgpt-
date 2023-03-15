import { connect } from 'react-redux';

function Home({ user }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        width: '80%',
      }}
    >
      <h1>{`Bienvenido ${user.name}`}</h1>
      <img src={user.picture} style={{ borderRadius: '50%' }} />
    </div>
  );
}

const mapStateToProps = (store) => ({
  user: store.user.userInfo,
});
export default connect(mapStateToProps)(Home);
