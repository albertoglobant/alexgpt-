import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'underscore';

import Login from './modules/Login';
import Home from './modules/Home';
import Products from './modules/Products';

function App({ user }) {
  const isGlobantUser = () => {
      return (
        !_.isEmpty(user.userInfo) && user.userInfo.email.includes('@globant')
      );
    },
    ProtectedRoute = ({ children }) => {
      if (!isGlobantUser()) {
        return <Navigate to="/" replace />;
      }

      return children;
    };

  return (
    <div style={styles._app}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (store) => ({
  user: store.user,
});

const styles = {
  _app: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
};

export default connect(mapStateToProps)(App);
