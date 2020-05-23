import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {BrowserRouter,Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/">
      <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
