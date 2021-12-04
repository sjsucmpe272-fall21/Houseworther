import * as React from 'react';
import { Component, useState } from 'react'
import { Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ButtonMaterial from '@mui/material/Button';
import { KeyboardArrowDown } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { Box, height } from '@mui/system';
import Charts from 'chart.js/auto';
import { CardContent, Typography } from '@mui/material';
import { Bar, Line, Chart } from 'react-chartjs-2'
import Skeleton from '@mui/material/Skeleton';

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const statesList = require('./states_50.json');
const citiesList = require('./US_States_and_Cities.json');
const baseURL = "http://localhost:5555";

export default class Dashboard extends Component {
    
    constructor() {
        super();
        this.state = {
            bedRooms: '',
            _state: '',
            city: '',
            current_value: 0,
            isStateSelect: false,
            predictionData1: [],
            predictionData2: [],
            predictionData3: [],
            isDataFetch: false,
            isSubmitEnable: false
        }
    }

    handleChangeBedRooms = (e) => {
        console.log(e);
        this.setState({ bedRooms: e.target.textContent })
    }

    handleChangeState = (e) => {
        const state = e.target.textContent;
        console.log(e);
        this.setState({ _state: state, isStateSelect: true });
        localStorage.setItem('state', state);

    }

    handleChangeCity = (e) => {
        this.setState({ city: e.target.textContent })
    }



    statesList = () => {
        let list = [];
        let id = 1;
        console.log(statesList);
        statesList.map(state => {

            return list.push(
                {
                    label: state.name,
                    code: state.code
                }
            )
        })

        return list;
    }

    bedRoomsList = () => {
        return [
            { label: '1', code: 1 }, { label: '2', code: 2 }, { label: '3', code: 3 }, { label: '4', code: 4 }, { label: '5', code: 5 }
        ]
    }

    cityList = () => {
        let list = [];
        let id = 1;
        let state = localStorage.getItem('state');
        console.log(state);
        if (statesList.length == 0) {
            cities.forEach(city => {
                return list.push(
                    {

                    }
                )
            })
            return list
        }

        let cities = citiesList[state];
        if (cities != undefined && cities.length > 0) {
            cities.forEach(city => {
                return list.push(
                    {
                        label: city,
                        code: id++
                    }
                )
            })
        }
        console.log(list);
        return list
    }

    submitDetails = (e) => {
        e.preventDefault();
        const predictionDetails = {
            bedRooms: this.state.bedRooms,
            city: this.state.city,
            current_value: this.state.current_value
        }
        console.log(predictionDetails);
        axios.post(`${baseURL}/`, predictionDetails)
            .then(res => {
                console.log(res.data);
                this.setState({
                    predictionData: res.data,
                    isDataFetch: true
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    resetDetails = (e) => {
        e.preventDefault();
        this.setState({
            bedRooms: '',
            _state: '',
            city: '',
            isStateSelect: false,
            predictionData: [],
            isDataFetch: false
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="mt-5" style={{ backgroundColor: "whitesmoke", height: "100vh" }}>
                    <Container className="p-2">
                        <div>
                            <Row>
                                <Col>
                                    <Card className="mt-5 border rounded" style={{ width: "1300px" }}>
                                        <CardContent>
                                            <Form>
                                                <Row>
                                                    <Col className="mx-auto">
                                                        <Autocomplete
                                                            className="mt-2"
                                                            disablePortal
                                                            id="combo-box-demo"
                                                            options={this.bedRoomsList()}
                                                            value={this.state.bedRooms}
                                                            sx={{ width: 300 }}
                                                            renderInput={(params) => <TextField {...params} label="Number of Bedrooms" required />}
                                                            onChange={(e) => this.handleChangeBedRooms(e)}
                                                            autoSelect
                                                        />

                                                    </Col>
                                                    <Col className="mx-auto">
                                                        <TextField className="mt-2" type="number" label="Current Price*" variant="outlined" onChange={(e) => { this.setState({ current_value: e.target.value }) }} />
                                                    </Col>

                                                    <Col className="mx-auto">
                                                        <Autocomplete
                                                            className="mt-2"
                                                            disablePortal
                                                            id="combo-box-demo"
                                                            options={this.statesList()}
                                                            value={this.state._state}
                                                            sx={{ width: 300 }}
                                                            renderInput={(params) => <TextField {...params} label="State" required />}
                                                            onChange={(e) => this.handleChangeState(e)}
                                                            autoSelect
                                                        />
                                                    </Col>
                                                    <Col className="mx-auto">
                                                        {this.state.isStateSelect == true ? <React.Fragment>
                                                            <Autocomplete
                                                                className="mt-2"
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={this.cityList()}
                                                                sx={{ width: 300 }}
                                                                renderInput={(params) => <TextField {...params} label="City" required />}
                                                                onChange={(e) => this.handleChangeCity(e)}
                                                                autoSelect
                                                            />
                                                        </React.Fragment> : null}
                                                    </Col>

                                                </Row>
                                            </Form>
                                            <br /><br />
                                            <Form className="d-flex justify-content-center">
                                                <Button className="mx-3 mt-2" variant="outlined" type="submit" color="inherit" size="large" disableElevation onClick={this.resetDetails}>Reset</Button>
                                                <Button className="mx-3 mt-2" variant="contained" type="submit" color="primary" size="large" disableElevation onClick={this.submitDetails} disabled={!(this.state._state && this.state.city)}>Submit</Button>
                                            </Form>
                                        </CardContent>
                                    </Card>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                    <Divider className="mt-3 px-5" style={{ width: "1500px", fontFamily: "unset" }} spacing={4}>Price Prediction</Divider>
                    <Container>
                        <Row>
                            <Col className="mt-3 p-0" style={{ height: "25vh" }}>
                                <div className="justify-content-center">
                                    <Card className="p-5" style={{ width: "1300px", height: "400px" }} >
                                        <CardContent>

                                            {this.state.isDataFetch ? <React.Fragment>
                                                <Typography className="mt-0" variant="inherit" component="h5" align="center">
                                                    Price prediction for {this.state.city} City for next 12 months
                                                </Typography>
                                                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                                    <Chart
                                                        data={{
                                                            labels: month,
                                                            datasets: [
                                                                {
                                                                    type: 'line',
                                                                    label: `${this.state.bedRooms}bhk`,
                                                                    data: this.state.predictionData,
                                                                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                                                    borderColor: 'rgba(255, 0, 0, 1)',
                                                                    borderWidth: 1,
                                                                },
                                                                {
                                                                    type: 'bar',
                                                                    label: `${this.state.bedRooms}bhk`,
                                                                    data: this.state.predictionData,
                                                                    backgroundColor: 'rgba(0, 255, 0, 0.5)',
                                                                    borderColor: 'rgba(0, 255, 0, 1)',
                                                                    borderWidth: 1,
                                                                }
                                                            ],

                                                        }}
                                                        height={150}
                                                        width={600}
                                                        options={{
                                                            interaction: {
                                                                mode: 'dataset',
                                                                intersect: true
                                                            },
                                                            scales: {
                                                                x: {
                                                                    display: true,
                                                                    title: {
                                                                        display: true,
                                                                        text: 'Months'
                                                                    }
                                
                                                                },
                                                                y: {
                                                                    display: true,
                                                                    title: {
                                                                        display: true,
                                                                        text: 'Price ($)'
                                                                    },
                                                                    ticks: {
                                                                        stepSize: 1000
                                                                    }
                                                                }
                                                            }
                                                        }}
                                                    />

                                                </Box>
                                            </React.Fragment> : <React.Fragment>

                                                <Typography className="mt-5 p-5" variant="inherit" display="block" component="h5" align="center">
                                                    Enter details and submit to view the results
                                                </Typography>

                                            </React.Fragment>}
                                        </CardContent>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment >
        )
    }
}