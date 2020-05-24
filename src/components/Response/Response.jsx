import React, { useEffect} from 'react'
import { useHistory} from "react-router-dom";

function Response() {

    let loggedinstatus = JSON.parse(localStorage.getItem('loggedin') || 'false');
    let history = useHistory();

    useEffect(() => {
        if (loggedinstatus === false) {
            history.push(
                {
                    pathname: "/login"
                }
            )
        }
    }, []);

    return (
        <div>
            Response
        </div>
    )
}

export default Response
