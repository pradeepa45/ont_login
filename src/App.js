import HomePage from './HomePage'
// import Logo from './logo.svg';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import ErrorPage from './ErrorPage';

// var signedIn = false;

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path='/ont_login/login' component={LoginPage}/>
          <Route exact path='/ont_login/home' component={HomePage} />
          <Route path='/*' component={ErrorPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
