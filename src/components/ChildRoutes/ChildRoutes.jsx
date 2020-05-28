import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

function ChildRoutes(props) {

    const Student = lazy(() => import('./Student/Student'));
    const StudentHome = lazy(() => import('./StudentHome/StudentHome'));
    const Employee = lazy(() => import('./Employee/Employee'));

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/drawer">
                            <Redirect to="/drawer/student/home" />
                        </Route>
                        <Route exact path="/drawer/student/home">
                        <StudentHome />
                        </Route>
                        <Route exact path="/drawer/student/onBoard">
                        <Student />
                        </Route>
                        <Route exact path="/drawer/employee" component={Employee} />
                        <Route>
                        {props.children}
                        </Route>
                    </Switch>
            </Suspense>
        </div>
    )
}

export default ChildRoutes
