import HomePage from './HomePage'
import  {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from './LoginPage';
import ErrorPage from './ErrorPage';

// Router
function App() {
  var status = localStorage.getItem('signIn');
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route exact path='/home'>
            {status ? <HomePage /> : <LoginPage />}
          </Route>
          <Route exact path='/notfound' component={ErrorPage} />
          <Route path='/*' > 
            <Redirect to='/notfound'></Redirect>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
