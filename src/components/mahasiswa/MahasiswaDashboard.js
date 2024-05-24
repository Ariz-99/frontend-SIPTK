import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Outlet, useMatch } from 'react-router-dom';
import SideNavbar from './common/SideNavbarMahasiswa';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentDashboard() {
    const isSurveiMahasiswa = useMatch('/mahasiswa/survei-mahasiswa/');

    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    {/* Render Col hanya jika bukan halaman detail mahasiswa */}
                    {!isSurveiMahasiswa && (
                        <Col md={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <SideNavbar />
                        </Col>
                    )}
                    <Col md={isSurveiMahasiswa ? 12 : 10} style={{ padding: 20, marginBottom: 40}}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default StudentDashboard;