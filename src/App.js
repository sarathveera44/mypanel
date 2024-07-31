import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPanel from './pages/DashboardPanel';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/signin" component={<SignIn />} />? 
          <Route path="/signup" component={<SignUp/>} />
          <Route path="/dashboard" exact component={<DashboardPanel />} />
        </Routes>
    </Router>
  );
}

export default App;
