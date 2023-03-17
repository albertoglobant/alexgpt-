import { Link as RouterLink } from 'react-router-dom';
import LogoImg from '../../../assets/images/globantArrow.png';

const WelcomeText = () => {
  return (
    <>
      <div className="titleWrapper">
        <RouterLink to={'/'}>
          <div className="title">
            <h3>alexGPT+</h3>
            <img src={LogoImg} alt="Globant" />
          </div>
        </RouterLink>
      </div>
      <div className="contentWrapper">
        <span className="title">Discover</span>
        <span className="subtitle">the Globant experience!</span>
        <p className="content">
          The smart solution for all your question: alexGPT+
        </p>
      </div>
    </>
  );
};

export default WelcomeText;
