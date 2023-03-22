import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

import ChannelItem from './ChannelItem';

function Channels({ product }) {
  const navigate = useNavigate();

  return (
    <div className="mainWrapper">
      <div className="channelListWrapper" onClick={() => navigate('/products')}>
        <div>
          <h4>GLOBANT CHANELS</h4>
        </div>
        <AddIcon className="icon" />
      </div>
      <ChannelItem product={product} />
    </div>
  );
}

export default Channels;
