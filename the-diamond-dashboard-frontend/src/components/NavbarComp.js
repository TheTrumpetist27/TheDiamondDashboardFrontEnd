import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import PlayerHome from './player/PlayerHome';
import TeamHome from './team/TeamHome';
import GameHome from './game/GameHome';
import ManagerHome from './manager/ManagerHome';

export default class NavbarComp extends Component {
  render() {
    return (
    <Router>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">TheDiamondDashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/player"}>Spelers</Nav.Link>
                            <Nav.Link as={Link} to={"/team"}>Teams</Nav.Link>
                            <Nav.Link as={Link} to={"/game"}>Wedstrijden</Nav.Link>
                            <Nav.Link as={Link} to={"/manager"}>Managers</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/player' element={<PlayerHome />} />
                <Route path='/team' element={<TeamHome />} />
                <Route path='/game' element={<GameHome />} />
                <Route path='/manager' element={<ManagerHome />} />
            </Routes>
        </div>
    </Router>
    )
  }
}
