import './App.css';
import SignForm from './components/signform ';
import { Switch,Route } from 'react-router-dom';
import LoginForm from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
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
