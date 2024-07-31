import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPanel from './pages/DashboardPanel';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/signin" component={<SignIn />} />? 
        <Route path="/signup" component={<SignUp/>} />
        <Route path="/dashboard" exact component={<DashboardPanel />} />
        </Switch>
    </Router>
  );
}

export default App;
