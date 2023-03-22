import { googleLogout } from '@react-oauth/google';

import { store } from '../../store';
import { showDialog } from '../../utils';
import { removeUser } from '../../store/user';

function NavBar({ product, userName, avatar }) {
  return (
    <div className="navBar">
      <div className="leftColumn">
        <h4>alexGPT+</h4>
      </div>
      <div className="rightColumn">
        <div>
          <h4>
            <span>#</span> {product}
          </h4>
          <img
            onClick={() =>
              showDialog(
                `¿Deseas cerrar sesión ${userName}?`,
                ['Sí, cerrar sesión', 'No'],
                avatar,
                (e) => {
                  if (e === 0) {
                    googleLogout();
                    store.dispatch(removeUser());
                  }
                }
              )
            }
            src={avatar}
            alt="Profile avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
