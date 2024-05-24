import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image, Stack } from 'react-bootstrap';
import profileImage from './avatar-logo.png'
import { BsTrophyFill, BsChatLeftText } from "react-icons/bs";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './MahasiswaHome.css'

function MahasiswaHome() {
    const events = [
        {
            title: "Apa coba",
            start: "2024-04-25T08:00:00",
            end: "2023-04-25T09:00:00",
        },
    ];

    return (
        <div>
            <h1 className="admin-dashboard-header">Selamat Datang, Nama Mahasiswa</h1>
            <h5 className="siptk-header">Sistem Informasi Perwalian Teknik Komputer (SIPTK)</h5>
            <hr className="siptk-line" />

            <div className="announcement-container">
                <div className="announcement-box1">
                    <h4>Pengumuman<Link to="/mahasiswa/pengumuman"><BsChatLeftText className="pengumuman-icon" /></Link></h4>
                    <Card className='custom-card'>
                        <Card.Body className='card-body-scrollable'>
                            <Stack gap={3}>
                                <div className="grid-container">
                                    <div>
                                        <Image
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={profileImage}
                                            alt="Profile Picture"
                                            roundedCircle
                                        />
                                    </div>
                                    <div>
                                        <Card border="dark" style={{ margin: 'auto' }}>
                                            <Card.Body>
                                                <h5>Judul Pengumuman 1</h5>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="grid-container">
                                    <div>
                                        <Image
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={profileImage}
                                            alt="Profile Picture"
                                            roundedCircle
                                        />
                                    </div>
                                    <div>
                                        <Card border="dark" style={{ margin: 'auto' }}>
                                            <Card.Body>
                                                <h5>Judul Pengumuman 2</h5>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="grid-container">
                                    <div>
                                        <Image
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={profileImage}
                                            alt="Profile Picture"
                                            roundedCircle
                                        />
                                    </div>
                                    <div>
                                        <Card border="dark" style={{ margin: 'auto' }}>
                                            <Card.Body>
                                                <h5>Judul Pengumuman 3</h5>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </Stack>
                        </Card.Body>
                    </Card>
                </div>
                <div className="academic-status-box1" >
                    <h4><BsTrophyFill /> Status Akademik</h4>
                    <Container>
                        <Row style={{ marginTop: '45px', fontSize: '16px', fontWeight: 'bold' }}>
                            <Col className="status-col">IPK<hr />3.50</Col>
                            <Col className="status-col">SKS<hr />134</Col>
                            <Col >Semester Studi<hr />7</Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div>
                <Card>
                    <Card.Header>
                        <h4 className='header-card'>Kalender</h4>
                    </Card.Header>
                    <Card.Body>
                        <Fullcalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView={"dayGridMonth"}
                            headerToolbar={{
                                start: "today prev,next", 
                                center: "title",
                                end: "dayGridMonth,timeGridWeek,timeGridDay", 
                            }}
                            height={"90vh"}
                            events={events}
                            eventDidMount={(info) => {
                                return new bootstrap.Popover(info.el, {
                                    title: info.event.title,
                                    placement: "auto",
                                    trigger: "hover",
                                    customClass: "popoverStyle",
                                    content:
                                        "<p>Isi Konten</strong>.</p>",
                                    html: true,
                                });
                            }}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default MahasiswaHome;