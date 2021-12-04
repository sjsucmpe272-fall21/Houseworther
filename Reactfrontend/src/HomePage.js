import React, { Component } from 'react'
import Navigationbar from './Navigationbar'
import Dashboard from './Dashboard'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Navigationbar />
                    </Row>
                    <Row>
                        <Dashboard />
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
