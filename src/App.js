import HomePage from './HomePage'
import  {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from './LoginPage';
import ErrorPage from './ErrorPage';

// var signedIn = false;

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/notfound' component={ErrorPage} />
          <Route path='/*'> 
            <Redirect to='/notfound'></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
