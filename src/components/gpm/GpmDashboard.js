import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, useMatch } from 'react-router-dom';
import SideNavbar from './common/SideNavbarGPM';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function GPMDashboard() {
    const isDetailEvaluasiMahasiswa = useMatch('/gpm/evaluasi/detail/:mahasiswaId');

    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    {!isDetailEvaluasiMahasiswa && (
                        <Col md={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <SideNavbar />
                        </Col>
                    )}
                    <Col md={isDetailEvaluasiMahasiswa ? 12 : 10} style={{ padding: 20, marginBottom: 40}}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default GPMDashboard;