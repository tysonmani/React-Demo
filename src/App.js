import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import { Route, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  const Login = lazy(() => import('./components/Login/Login'));
  const Home = lazy(() => import('./components/Home/Home'));
  const Response = lazy(() => import('./components/Response/Response'));
  const Notification = lazy(() => import('./components/Notification/Notification'));
  const BackgroundFixed = lazy(() => import('./components/BackgroundFixed/BackgroundFixed'));
  const PositionFixed = lazy(() => import('./components/PositionFixed/PositionFixed'));
  const DrawerSideNavBar = lazy(() => import('./components/DrawerSideNavBar/DrawerSideNavBar'));
  const NotFound = lazy(() => import('./components/NotFound/NotFound'));

  useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.log("token", data)
    })
    .catch(error => {
      console.log("error", error)
  })
  })

  return (
    <div>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route exact path="/backgroundFixed" component={BackgroundFixed} />
          <Route exact path="/positionFixed" component={PositionFixed} />
          <Route path="/drawer">
            <DrawerSideNavBar>
              <NotFound />
            </DrawerSideNavBar>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
