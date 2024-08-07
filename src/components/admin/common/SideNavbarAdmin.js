import React from 'react';
import { Nav, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsPersonCircle, BsBellFill, BsClipboard2Check, BsSpeedometer2, BsCalendar3 } from "react-icons/bs";
import { IoLogOutSharp } from "react-icons/io5";
import { GrDownload } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css'
import './SideNavbarAdmin.css'

function SideNavbar() {
    return (
        <Nav className=" flex-column SideNavbar-custom" style={{ width: '16.5%', position: 'fixed' }}>
            <div style={{ flex: 1 }}>
                <div className="p-3 text-center">
                    <BsPersonCircle className="lb-light" size="100px" />
                    <h5 className="mt-2">Admin</h5>
                </div>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/admin">
                        <Nav.Link className="sidebar-link"><BsSpeedometer2 className="me-2 sidebar-link" size="20px"/>Dashboard</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/admin/data-mahasiswa">
                        <Nav.Link className="sidebar-link"><BsBellFill className="me-2 sidebar-link" size="20px"/>Data Mahasiswa</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/admin/data-dosen">
                        <Nav.Link className="sidebar-link"><BsClipboard2Check className="me-2 sidebar-link" size="20px"/>Data Dosen</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/admin/data-gpm">
                        <Nav.Link className="sidebar-link"><BsClipboard2Check className="me-2 sidebar-link" size="20px"/>Data GPM</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/admin/jadwal-dosen">
                        <Nav.Link className="sidebar-link"><BsCalendar3 className="me-2 sidebar-link" size="20px"/>Jadwal Dosen</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/admin/import-data">
                        <Nav.Link className="sidebar-link"><GrDownload className="me-2 sidebar-link" size="20px"/>Import Data</Nav.Link>
                    </LinkContainer>
                </Button>
            </div>
            <div className='custom-logout'>
                <LinkContainer to="/login">
                    <Nav.Link className='custom-logout-text'><IoLogOutSharp className="me-2" size="20px"/>Log Out</Nav.Link>
                </LinkContainer>
            </div>
        </Nav>
    );
}

export default SideNavbar;