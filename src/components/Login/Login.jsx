import React, { useState, useEffect } from 'react'
import "./Login.css";

function Login() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ErrorStatus, setErrorStatus] = useState(null);

    const mySubmitHandler = () => {
        console.log(Username, Password);
    }
    return (
        <div>
            <div className="container-fluid my-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <br /><br /><br /><br />
                        <div className="login">
                            <h5 style={{ color: "#2867B2" }}><i className="fa fa-rocket"></i>Communi<span style={{ color: "black" }}>cation</span></h5>
                            <h6>Login</h6><br />
                            <form>
                                <input placeholder="Username" type="text" value={Username} onChange={e => setUsername(e.target.value)} /><br/><div style={{marginTop:"2px"}}/>
                                <input placeholder="Password" type="password" value={Password} onChange={e => setPassword(e.target.value)} /><br /><br />
                                <button onClick={mySubmitHandler} className="button button1" type="button" disabled={Username == '' || Password == ''}>Submit</button><br/><br/>
                                {ErrorStatus ? <p style={{ color: "red" }}>{ErrorStatus}</p> : null}
                                <span>
                                    <p style={{ fontSize: "80%" }}>communication v1.0<br />
                                    63 Ideas Infolabs Private Limited© 2020</p>
                                </span>
                            </form>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
