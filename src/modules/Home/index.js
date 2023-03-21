// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

import NavBar from '../../components/NavBar';
import Channel from './components/Channel';
import Chat from './components/Chat';

function Home({ userInfo }) {
  // const { state } = useLocation();

  //state && console.log('location', state.product);

  // useEffect(() => {
  //   async function getAnswer() {
  //     const client = axios.create({
  //         headers: {
  //           Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  //         },
  //       }),
  //       params = {
  //         messages: [
  //           {
  //             content: 'create a user story for login',
  //             role: 'user',
  //           },
  //         ],
  //         model: 'gpt-3.5-turbo',
  //         max_tokens: 2000,
  //         temperature: 0.3,
  //       };
  //     client
  //       .post('https://api.openai.com/v1/chat/completions', params)
  //       .then((result) => {
  //         console.log(result.data.choices[0].message.content);
  //       });
  //   }

  //   getAnswer();
  // }, []);

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
