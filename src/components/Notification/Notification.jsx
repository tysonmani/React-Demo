import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function Notification() {

    const [Username, setUsername] = useState('');
    const [currency, setCurrency] = useState('EUR');
    const [value, setValue] = React.useState('Controlled');
    const [items, setItems] = React.useState([]);
    const currencies = [
        {
            value: 'USD',
            label: 'Awesome Dude',
            bool: false
        },
        {
            value: 'EUR',
            label: 'Common Dude',
            bool: false
        },
        {
            value: 'BTC',
            label: 'Whatsap Dude',
            bool: false
        },
        {
            value: 'JPY',
            label: 'Coool Dude',
            bool: false
        },
    ];

    useEffect(() => {
        setItems(currencies);
    }, []);

    const handleChange1 = (event) => {
        setCurrency(event.target.value);
        console.log(event.target.value, items);
    };

    const handleChange2 = (event, value) => {
        setValue(event.target.value);
        console.log(event.target.value, value);
    };

    const handleChange3 = (event, index) => {
        let newArr = [...items];
        newArr[index].bool = event.target.checked;
        setItems(newArr);
        console.log(items);
    };

    const myButtonHandler = () => {
        alert("Cool");
    }

    return (
        <div>
            <p>Notification</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <br /><br />
                        <Button variant="outlined" onClick={myButtonHandler} color="secondary">Primary</Button><br /><br />
                        <TextField value={Username} onChange={e => {
                            setUsername(e.target.value); console.log(Username, e.target.value);
                        }} style={{ width: "100%", marginTop: "20px" }} id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={currency}
                            onChange={handleChange1}
                            helperText="Please select your currency"
                            style={{ width: "30%" }}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="standard-multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax={4}
                            value={value}
                            onChange={e => handleChange2(e, value)}
                            style={{ width: "30%" }}
                        /><br />
                        {items.map((option, index) => (
                            // <span>{option.value}</span>
                            <FormControlLabel
                                key={option.value}
                                control={<Checkbox
                                    key={option.value}
                                    checked={option.bool}
                                    onChange={e => handleChange3(e, index)}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />}
                                label={option.label}
                            />
                        ))}
                        <Fab onClick={myButtonHandler} size="small" color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                        <span style={{fontSize:"100px"}} className="material-icons">
                            accessibility
                        </span>         
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
