import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/MainPage/MainPage'
import * as serviceWorker from './serviceWorker';
import Converter from './pages/Converter/Converter'
import Registration from './pages/Registration/Registration'
import Firebase, { FirebaseText } from './components/firebase/indexfile';
import Autorisation from './pages/Autorization/Autorisation'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

ReactDOM.render(

  <React.StrictMode>
    <FirebaseText.Provider value={new Firebase()}>
      <Router>
        <Switch>
          <Route exact path="/Auto" >
            <Autorisation />
          </Route>
          <Route exact path="/Reg" >
            <Registration />
          </Route>
          <Route exact path="/" >
            <MainPage />
          </Route>
          <Route exact path="/Converter" >
            <Converter />
          </Route>
        </Switch>
      </Router>
    </FirebaseText.Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
