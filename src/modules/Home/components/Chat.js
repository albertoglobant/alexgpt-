import { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import globantLogo from '../../../assets/images/globantLogo.png';

function Chat({ avatar }) {
  const [inputValue, setInputValue] = useState(''),
    [loading, setLoading] = useState(false),
    [question, setQuestion] = useState(''),
    [answer, setAnswer] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setQuestion(e.target.value);
      setLoading(true);
      setInputValue('');
      setTimeout(() => {
        setAnswer(true);
        setLoading(false);
      }, 4000);
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
            color="rgb(54, 215, 183)"
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
          <p>
            En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            mucho tiempo que vivía un hidalgo de los de lanza en astillero,
            adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
            vaca que carnero, salpicón las más noches, duelos y quebrantos los
            sábados, lantejas los viernes, algún palomino de añadidura los
            domingos, consumían las tres partes de su hacienda. El resto della
            concluían sayo de velarte, calzas de velludo para las fiestas, con
            sus pantuflos de lo mesmo, y los días de entresemana se honraba con
            su vellorí de lo más fino.
          </p>
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
