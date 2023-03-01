import './App.css';
import SignForm from './components/signform ';
import { Switch,Route } from 'react-router-dom';
import LoginForm from './components/Login';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
         <Homepage/>
        </Route>
        <Route exact path="/sign">
          <SignForm/>
        </Route>
        <Route exact path="/login">
          <LoginForm/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
