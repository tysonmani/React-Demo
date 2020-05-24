import React, { useEffect} from 'react';
import { useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

function Home() {
    let loggedinstatus = JSON.parse(localStorage.getItem('loggedin') || 'false');
    let history = useHistory();
    let location = useLocation();
    let { slug } = useParams();
    let match = useRouteMatch("/home/:slug");

    useEffect(() => {
        console.log(history, location, match);
        if (loggedinstatus === false) {
            history.push(
                {
                    pathname: "/login"
                }
            )
        }
    }, []);

    const myLogoutHandler = () => {
        localStorage.removeItem('loggedin');
        history.push(
            {
                pathname: "/login"
            }
        )
    }

    return (
        <div>
            <h1>Cool{location.pathname}
                {location.state ? location.state.from : null}
                {slug}</h1>
            <div>
                <button onClick={myLogoutHandler} type="button">Logout</button>
            </div>
        </div>
    )
}

export default Home
