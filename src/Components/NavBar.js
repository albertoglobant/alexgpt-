function NavBar({ avatar, title }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ background: '#f2f3f5', width: '30%' }} className="header">
        <h4 className="headerText">alexGPT+</h4>
      </div>
      <div style={{ width: '70%', background: '#FFFFFF' }}>
        <div
          style={{
            height: '50px',
            alignItems: 'center',
            display: 'flex',
            padding: '10px',
            borderBottom: '1px solid #E3E5E8',
            justifyContent: 'space-between',
          }}
        >
          <h4 style={{ color: '#060607' }}>
            <span style={{ color: '#747F8D' }}>#</span> {title}
          </h4>
          <img
            src={avatar}
            style={{ borderRadius: '50%', maxWidth: '100%', maxHeight: '100%' }}
            alt="Profile avatar"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
