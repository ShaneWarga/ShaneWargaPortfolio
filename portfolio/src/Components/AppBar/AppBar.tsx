import React from "react";
import Navbar  from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const sections = ['About Me', 'Projects', 'Resume' ,'Contact'];

const NavSections = sections.map((section)=>
    <Nav.Link href={section}>
        {section}
    </Nav.Link>
);

const AppBar = () => {
    
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href='#home'>Shane Warga</Navbar.Brand>
                <Nav className="me-auto">
                    {NavSections}
                </Nav>
            </Container>
        </Navbar>    
    );
}

export default AppBar;




