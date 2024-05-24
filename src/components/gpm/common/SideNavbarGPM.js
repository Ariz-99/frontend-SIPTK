import React from 'react';
import { Nav, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsPersonCircle, BsBellFill, BsClipboard2Check, BsSpeedometer2 } from "react-icons/bs";
import { FaFileExport } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css'
import './SideNavbarGPM.css'

function SideNavbar() {
    return (
        <Nav className=" flex-column SideNavbar-custom" style={{ width: '16.5%', position: 'fixed' }}>
            <div style={{ flex: 1 }}>
                <div className="p-3 text-center">
                    <BsPersonCircle className="lb-light" size="100px" />
                    <h5 className="mt-2">GPM</h5>
                    <h5 className="mt-2">NIP</h5>
                </div>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/gpm">
                        <Nav.Link className="sidebar-link"><BsSpeedometer2 className="me-2 sidebar-link" size="20px"/>Dashboard</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/gpm/evaluasi">
                        <Nav.Link className="sidebar-link"><BsBellFill className="me-2 sidebar-link" size="20px"/>Evaluasi</Nav.Link>
                    </LinkContainer>
                </Button>
            </div>
            <div className='custom-logout'>
                <LinkContainer to="/login">
                    <Nav.Link className='custom-logout-text'><TbLogout2 className="me-2" size="20px"/>Log Out</Nav.Link>
                </LinkContainer>
            </div>
        </Nav>
    );
}

export default SideNavbar;