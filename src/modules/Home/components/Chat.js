import { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { getAnswer } from '../../../api/openAIrequest';

import globantLogo from '../../../assets/images/globantLogo.png';

function Chat({ avatar }) {
  const [inputValue, setInputValue] = useState(''),
    [loading, setLoading] = useState(false),
    [question, setQuestion] = useState(''),
    [answer, setAnswer] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  async function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setQuestion(e.target.value);
      setLoading(true);
      setAnswer('');
      setInputValue('');
      const IAresp = await getAnswer('user', e.target.value);
      setAnswer(IAresp);
      setLoading(false);
    }
  }

  return (
    <div className="chatWrapper">
      {question && (
        <>
          <div className="question">
            <img src={avatar} alt="Profile avatar" />
            <p>{question}</p>
          </div>
          <BeatLoader
            color="rgb(140 198 63)"
            cssOverride={{
              textAlign: 'center',
            }}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
          />
        </>
      )}
      {answer && (
        <div className="answer">
          <img src={globantLogo} />
          <p>{answer}</p>
        </div>
      )}
      <input
        placeholder="Ask to AlexGPT+"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Chat;
