import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Notification() {

    const [Username, setUsername] = useState('');
    const [currency, setCurrency] = useState('EUR');
    const [value, setValue] = React.useState('Controlled');
    const [items, setItems] = React.useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [isModalOpen, setisModalOpen] = useState(false);

    const classes = useStyles();
    const [value123, setValue123] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue123(newValue);
    };

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

    const toggleModal = () => {
        setisModalOpen(!isModalOpen);
    }

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
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                            Open modal
                        </button>
                        <Button onClick={toggleModal} variant="outlined" color="secondary">Primary</Button><br /><br />
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
                        <span style={{ fontSize: "100px" }} className="material-icons">
                            accessibility
                        </span><br />
                        <DatePicker minDate={new Date('05-23-2020')} selected={startDate} onChange={date => { console.log(date); setStartDate(date) }} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                    </div>
                </div>
            </div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value123}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value123} index={0}>
                    Item One
      </TabPanel>
                <TabPanel value={value123} index={1}>
                    Item Two
      </TabPanel>
                <TabPanel value={value123} index={2}>
                    Item Three
      </TabPanel>
                <TabPanel value={value123} index={3}>
                    Item Four
      </TabPanel>
                <TabPanel value={value123} index={4}>
                    Item Five
      </TabPanel>
                <TabPanel value={value123} index={5}>
                    Item Six
      </TabPanel>
                <TabPanel value={value123} index={6}>
                    Item Seven
      </TabPanel>
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            Modal body..
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <p>CoolModal</p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="outlined" color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Notification
