import AnalyticsIcon from '@mui/icons-material/Analytics';

function ChannelItem() {
  return (
    <>
      <div className="channelHeader">
        <AnalyticsIcon />
        <h4>UI Engineering</h4>
      </div>
      <div className="channelItem">
        <span className="channelItemIcon">EC</span>
        <div className="channelItemBody">
          <h4>Explain Code</h4>
          <div>
            <span>Example 1</span>
            <span>Example 2</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelItem;
