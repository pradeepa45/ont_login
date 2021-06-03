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
          <Route exact path='/' component={LoginPage}/>
          <Route exact path='/home' component={HomePage} />
          {/* <Route path='/*' component={ErrorPage}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
