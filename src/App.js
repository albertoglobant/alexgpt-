import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './modules/Login';
import Home from './modules/Home';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
