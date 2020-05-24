import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Notification() {

    const [Username, setUsername] = useState('');

    const myButtonHandler = () => {
        alert("Cool");
    }

    const myTextHandler = () => {
       
    }

    return (
        <div>
            <p>Notification</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <br /><br />
                            <Button onClick={myButtonHandler} color="secondary">Primary</Button><br /><br />
                            <TextField value={Username} onChange={e => {
                                setUsername(e.target.value);console.log(Username,e.target.value);
                                }} style={{width:"100%",marginTop:"20px"}} id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
