import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default class Navigationbar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home" className="mx-auto">House Worther</Navbar.Brand>
                        {/*   <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>*/}
                    </Container>
                </Navbar>
            </>
        )
    }
}
