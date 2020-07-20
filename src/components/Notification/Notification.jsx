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
import addNotification from 'react-push-notification';
import logo from './animation_500_kc94z28r.gif';
import * as animationData1 from './26327-growing-red-flower.json'
import * as animationData2 from './26337-jellyfish-kaiping.json'
import Lottie from 'react-lottie';
import ReactPlayer from 'react-player/lazy';

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
                    "id": "5ee4c74c82dc0d0004f6f8f5",
                    "instituteId": "5ee32f58d132be0004004335",
                    "classId": "5ee32f7cd132be0004004336",
                    "sectionId": "42e8bc38-d46d-4708-92c9-21fa26df2913",
                    "day": "Monday",
                    "subjectId": "5ee483acf3c1a70004fe81bf",
                    "startTime": "06:01 am",
                    "endTime": "06:01 am",
                    "displayName": "Science People",
                    "teacherId": "5ee46c74f3c1a70004fe81bc",
                    "subjectDTO": {
                        "id": "5ee483acf3c1a70004fe81bf",
                        "name": "Android",
                        "classId": "5ee32f7cd132be0004004336",
                        "type": null,
                        "active": null
                    },
                    "teacherDTO": {
                        "id": "5ee46c74f3c1a70004fe81bc",
                        "registrationNumber": 1002,
                        "autoGenerate": true,
                        "instituteId": "5ee32f58d132be0004004335",
                        "firstName": "Carnival",
                        "lastName": "George",
                        "gender": "Male",
                        "dateOfBirth": "2011-06-16",
                        "mobileNumber": "4564566543",
                        "address": "USA",
                        "imageUrl": "https://institute-managment.s3.ap-south-1.amazonaws.com/institute-managment/TEACHER/image/jpeg/1899fffe-66cd-4c1a-a16e-5d2eb9f1e6fe-2020-06-13/9015923-14315409.jpg",
                        "active": true,
                        "type": null
                    },
                    "type": null,
                    "active": true
                },
                {
                    "id": "5ee50d70b3d7000004081cf2",
                    "instituteId": "5ee32f58d132be0004004335",
                    "classId": "5ee32f7cd132be0004004336",
                    "sectionId": "42e8bc38-d46d-4708-92c9-21fa26df2913",
                    "day": "Monday",
                    "subjectId": "5ee50d1fb3d7000004081cf0",
                    "startTime": "11:01 pm",
                    "endTime": "11:01 pm",
                    "displayName": "Maths Trigonometry",
                    "teacherId": "5ee46a99f3c1a70004fe81bb",
                    "subjectDTO": {
                        "id": "5ee50d1fb3d7000004081cf0",
                        "name": "Maths",
                        "classId": "5ee32f7cd132be0004004336",
                        "type": null,
                        "active": null
                    },
                    "teacherDTO": {
                        "id": "5ee46a99f3c1a70004fe81bb",
                        "registrationNumber": 1001,
                        "autoGenerate": true,
                        "instituteId": "5ee32f58d132be0004004335",
                        "firstName": "Holo",
                        "lastName": "Mamy",
                        "gender": "Other",
                        "dateOfBirth": "2020-04-01",
                        "mobileNumber": "9431431433",
                        "address": "Antartica",
                        "imageUrl": "https://institute-managment.s3.ap-south-1.amazonaws.com/institute-managment/TEACHER/image/jpeg/cbccf588-8a86-41c5-a09d-f82a4508a0c4-2020-06-13/1*Lnd0nm_wldRHmmMcK54OkA.jpeg",
                        "active": true,
                        "type": null
                    },
                    "type": null,
                    "active": true
                },
                {
                    "id": "5ee50dc3b3d7000004081cf4",
                    "instituteId": "5ee32f58d132be0004004335",
                    "classId": "5ee32f7cd132be0004004336",
                    "sectionId": "42e8bc38-d46d-4708-92c9-21fa26df2913",
                    "day": "Monday",
                    "subjectId": "5ee50db3b3d7000004081cf3",
                    "startTime": "11:02 am",
                    "endTime": "11:02 am",
                    "displayName": "Physics Fluids",
                    "teacherId": "5ee46c74f3c1a70004fe81bc",
                    "subjectDTO": {
                        "id": "5ee50db3b3d7000004081cf3",
                        "name": "Physics",
                        "classId": "5ee32f7cd132be0004004336",
                        "type": null,
                        "active": null
                    },
                    "teacherDTO": {
                        "id": "5ee46c74f3c1a70004fe81bc",
                        "registrationNumber": 1002,
                        "autoGenerate": true,
                        "instituteId": "5ee32f58d132be0004004335",
                        "firstName": "Carnival",
                        "lastName": "George",
                        "gender": "Male",
                        "dateOfBirth": "2011-06-16",
                        "mobileNumber": "4564566543",
                        "address": "USA",
                        "imageUrl": "https://institute-managment.s3.ap-south-1.amazonaws.com/institute-managment/TEACHER/image/jpeg/1899fffe-66cd-4c1a-a16e-5d2eb9f1e6fe-2020-06-13/9015923-14315409.jpg",
                        "active": true,
                        "type": null
                    },
                    "type": null,
                    "active": true
                }
            ],
            "Friday": [
                {
                    "id": "5ee4f4017be99a000476b3ea",
                    "instituteId": "5ee32f58d132be0004004335",
                    "classId": "5ee32f7cd132be0004004336",
                    "sectionId": "42e8bc38-d46d-4708-92c9-21fa26df2913",
                    "day": "Friday",
                    "subjectId": "5ee4fe517be99a000476b3eb",
                    "startTime": "02:15 am",
                    "endTime": "02:15 am",
                    "displayName": "Division Maths",
                    "teacherId": "5ee46a99f3c1a70004fe81bb",
                    "subjectDTO": {
                        "id": "5ee4fe517be99a000476b3eb",
                        "name": "Good-Subject",
                        "classId": "5ee32f7cd132be0004004336",
                        "type": null,
                        "active": null
                    },
                    "teacherDTO": {
                        "id": "5ee46a99f3c1a70004fe81bb",
                        "registrationNumber": 1001,
                        "autoGenerate": true,
                        "instituteId": "5ee32f58d132be0004004335",
                        "firstName": "Holo",
                        "lastName": "Mamy",
                        "gender": "Other",
                        "dateOfBirth": "2020-04-01",
                        "mobileNumber": "9431431433",
                        "address": "Antartica",
                        "imageUrl": "https://institute-managment.s3.ap-south-1.amazonaws.com/institute-managment/TEACHER/image/jpeg/cbccf588-8a86-41c5-a09d-f82a4508a0c4-2020-06-13/1*Lnd0nm_wldRHmmMcK54OkA.jpeg",
                        "active": true,
                        "type": null
                    },
                    "type": null,
                    "active": true
                }
            ],
            "Saturday": [
                {
                    "id": "5ee50abfb3d7000004081cef",
                    "instituteId": "5ee32f58d132be0004004335",
                    "classId": "5ee32f7cd132be0004004336",
                    "sectionId": "42e8bc38-d46d-4708-92c9-21fa26df2913",
                    "day": "Saturday",
                    "subjectId": "5ee50aa9b3d7000004081cee",
                    "startTime": "10:49 pm",
                    "endTime": "10:49 pm",
                    "displayName": "Economics Guys",
                    "teacherId": "5ee46a99f3c1a70004fe81bb",
                    "subjectDTO": {
                        "id": "5ee50aa9b3d7000004081cee",
                        "name": "Economics",
                        "classId": "5ee32f7cd132be0004004336",
                        "type": null,
                        "active": null
                    },
                    "teacherDTO": {
                        "id": "5ee46a99f3c1a70004fe81bb",
                        "registrationNumber": 1001,
                        "autoGenerate": true,
                        "instituteId": "5ee32f58d132be0004004335",
                        "firstName": "Holo",
                        "lastName": "Mamy",
                        "gender": "Other",
                        "dateOfBirth": "2020-04-01",
                        "mobileNumber": "9431431433",
                        "address": "Antartica",
                        "imageUrl": "https://institute-managment.s3.ap-south-1.amazonaws.com/institute-managment/TEACHER/image/jpeg/cbccf588-8a86-41c5-a09d-f82a4508a0c4-2020-06-13/1*Lnd0nm_wldRHmmMcK54OkA.jpeg",
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

    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            native: true, // when using native, your OS will handle theming.
            duration: 3000, //optional, default: 5000,
            backgroundTop: 'green', //optional, background color of top container.
            backgroundBottom: 'darkgreen', //optional, background color of bottom container.
            colorTop: 'green', //optional, font color of top container.
            colorBottom: 'darkgreen'
        });
    }

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData1.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const styles = {
        checkAnimation: {

            width: '100px',
            height: '100px',
            marginLeft: '-5px',
            marginRight: '0px'
        },
    }

    return (
        <div>
            <p>Notification</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <Lottie
                            style={styles.checkAnimation}
                            options={defaultOptions1}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <br /><br />
                        {/* <img src={logo} alt="loading..." /> */}
                        <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        <Lottie
                            options={defaultOptions2}
                            height="100px"
                            width="100px"
                        />
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
                <Button onClick={buttonClick} variant="outlined" color="secondary">Notification</Button>
            </div>
            {/* <div className={classes.root}> */}
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
                        <div className="row">
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
                        </div>

                    </TabPanel>
                ))
            }

            {/* </div> */}

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
