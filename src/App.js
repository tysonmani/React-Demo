import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

function App() {

  const Login = lazy(() => import('./components/Login/Login'));
  const Home = lazy(() => import('./components/Home/Home'));
  const Response = lazy(() => import('./components/Response/Response'));
  const Notification = lazy(() => import('./components/Notification/Notification'));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home/:slug" component={Home} />
            <Route exact path="/response">
              <Response />
            </Route>
            <Route exact path="/notification" component={Notification} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
