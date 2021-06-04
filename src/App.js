import HomePage from './HomePage'
import  {HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import ErrorPage from './ErrorPage';
import {createBrowserHistory} from 'history'

// Router
function App() {
  var status = localStorage.getItem('signIn');
  const history = createBrowserHistory({forceRefresh : true})
;  return (
    <div>
      <Router basename={process.env.PUBLIC_URL} history={history}>
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
