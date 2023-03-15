import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './modules/Login';
import Home from './modules/Home';

function App({ user }) {
  const isGlobantUser = () => {
      return user.userInfo && user.userInfo.email.includes('@globant');
    },
    ProtectedRoute = ({ children }) => {
      if (!isGlobantUser()) {
        return <Navigate to="/" replace />;
      }

      return children;
    };

  return (
    <Router>
      <div className="container">
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
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (store) => ({
  user: store.user,
});

export default connect(mapStateToProps)(App);
