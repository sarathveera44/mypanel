import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPanel from './pages/DashboardPanel';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
        <Route path="/signin" element={<SignIn />} />? 
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<DashboardPanel />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
