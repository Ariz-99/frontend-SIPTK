import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Outlet, useMatch } from 'react-router-dom';
import SideNavbar from './common/SideNavbarDosen';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function DosenDashboard() {
    const isDetailMahasiswa = useMatch('/dosen/perwalian/detail/:mahasiswaId');
    const isProfileDosen = useMatch('/dosen/profil/*');

    const hideSideNavbar = isDetailMahasiswa || isProfileDosen;

    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    {!hideSideNavbar && (
                        <Col md={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <SideNavbar />
                        </Col>
                    )}
                    <Col md={hideSideNavbar ? 12 : 10} style={{ padding: 20, marginBottom: 40}}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default DosenDashboard;