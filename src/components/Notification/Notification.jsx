import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
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
import Avatar from 'react-avatar';
import "./Notification.css";

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
                    <Typography variant="h5" component="h5">{children}</Typography>
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

    const [periodDayTimetable, setperiodDayTimetable] = useState(null);

    const timeTableData = {

        "classSchedule": {
            "Monday": [
                {
                    "id": "5ee5e372fa2bfb0004f28d4f",
                    "instituteId": "5ee5e1aefa2bfb0004f28d48",
                    "classId": "5ee5e2b6fa2bfb0004f28d4a",
                    "sectionId": "0af22a49-df44-4e9d-916e-3b8f2afbe699",
                    "day": "Monday",
                    "subjectId": "5ee5e34ffa2bfb0004f28d4d",
                    "startTime": "02:14 pm",
                    "endTime": "02:14 pm",
                    "displayName": "Social Manners",
                    "teacherId": "5ee5e208fa2bfb0004f28d49",
                    "subjectDTO": {
                        "id": "5ee5e34ffa2bfb0004f28d4d",
                        "name": "Social",
                        "classId": "5ee5e2b6fa2bfb0004f28d4a",
                        "type": null,
                        "active": null
                    },
                    "teacherDTO": {
                        "id": "5ee5e208fa2bfb0004f28d49",
                        "registrationNumber": 1001,
                        "autoGenerate": true,
                        "instituteId": "5ee5e1aefa2bfb0004f28d48",
                        "firstName": "Dheeraj",
                        "lastName": "Khan",
                        "gender": "Male",
                        "dateOfBirth": "2020-06-02",
                        "mobileNumber": "8908908907",
                        "address": "Hosur",
                        "imageUrl": "https://institute-managment.s3.ap-south-1.amazonaws.com/institute-managment/TEACHER/image/jpeg/be97eeca-29cf-4ea0-b701-a1b584be204f-2020-06-14/1*Lnd0nm_wldRHmmMcK54OkA.jpeg",
                        "active": true,
                        "type": null
                    },
                    "type": null,
                    "active": true
                }
            ]
        }
    }

    const workingDays = [
        {
            id: 1,
            name: 'Monday'
        },
        {
            id: 2,
            name: 'Tuesday'
        },
        {
            id: 3,
            name: 'Wednesday'
        },
        {
            id: 4,
            name: 'Thursday'
        },
        {
            id: 5,
            name: 'Friday'
        },
        {
            id: 6,
            name: 'Saturday'
        },
        {
            id: 7,
            name: 'Sunday'
        }
    ];

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue123(newValue);
        getPeriodDay(workingDays[newValue].name);
    };

    const getPeriodDay = (day) => {
        console.log(day);
        var exist = true;
        Object.entries(timeTableData.classSchedule).map(([key, value]) => {
            if (key === day) {
                console.log(key, value, timeTableData.classSchedule[key]);
                setperiodDayTimetable(timeTableData.classSchedule[key]);
                exist = false;
                return true;
            }
        }
        );
        if (exist === true) {
            setperiodDayTimetable(null);
        }
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
        getPeriodDay("Monday");
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
            <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
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
                        {
                            workingDays.map((option, index) => (
                                <Tab key={index} label={option.name} {...a11yProps(index)} />
                            ))
                        }
                    </Tabs>
                </AppBar>
                {
                    workingDays.map((option, index) => (
                        <TabPanel key={index} value={value123} index={index}>
                            {
                                option.name,
                                periodDayTimetable === null ? "No Data Available" :
                                    periodDayTimetable.map((data, index) => (
                                        <div key={data.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6"><br /><br />
                                        <div id="box" className="card" style={{ width: "100%", borderRadius: "12px" }}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                                                        <Avatar name={data.displayName} size="35" round={true} />
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                                        <h5 style={{ marginTop: "4px" }} className="card-title">{data.displayName}</h5>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                                        <Fab color="secondary" size="small" aria-label="edit">
                                                            <EditIcon />
                                                        </Fab>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                                                    <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11">
                                                        <h5>Subject Name : {data.subjectDTO.name}</h5>
                                                        <h5>Teacher Name : {data.teacherDTO.firstName + " " + data.teacherDTO.lastName}</h5>
                                                        <h5>Timings : {data.startTime + "-" + data.endTime}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><br />
                                    </div>
                                    ))}

                        </TabPanel>
                    ))
                }
                </div>
                </div>
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
