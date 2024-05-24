import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image, Stack } from 'react-bootstrap';
import { BsChatLeftText } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { RiAlarmWarningFill } from "react-icons/ri";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import './DosenHome.css'

function DosenHome() {
    const [perwalianData, setPerwalianData] = useState([]);

    const fetchData = () => {
        // Data dummy
        const dummyData = [
            {
                profileImage: 'https://via.placeholder.com/64',
                name: 'Ariz Muhammad Fajar',
                nim: '22222222222222',
                info: 'Membutuhkan Persetujuan Perwalian',
                status: 'aman'
            },
            {
                profileImage: 'https://via.placeholder.com/64',
                name: 'Muhammad Fitra Arisaputra',
                nim: '33333333333333',
                info: 'Belum melakukan registrasi perwalian',
                status: 'kendala'
            },
            {
                profileImage: 'https://via.placeholder.com/64',
                name: 'Marul Anggara',
                nim: '44444444444444',
                info: 'Belum melakukan registrasi perwalian',
                status: 'tidak aman'
            }
        ];

        
        setPerwalianData(dummyData);
    };

    useEffect(() => {
        
        fetchData();
    }, []);

    // useEffect(() => {
    //     // Fungsi untuk mengambil data dari backend
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('URL_BACKEND');
    //             const data = await response.json();
    //             setPerwalianData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     // Panggil fungsi fetchData untuk mengambil data ketika komponen dimuat
    //     fetchData();
    // }, []);

    const events = [
        {
            title: "Apa coba",
            start: "2024-04-25T08:00:00",
            end: "2023-04-25T09:00:00",
        },
    ];

    return (
        <div>
            <h1 className="admin-dashboard-header">Selamat Datang, Nama Dosen</h1>
            <h5 className="siptk-header">Sistem Informasi Perwalian Teknik Komputer (SIPTK)</h5>
            <hr className="siptk-line" />

            <div className="announcement-container">
                <div className="announcement-box1">
                    <h4>Notifikasi Perwalian<Link to="/dosen/pengumuman"><BsChatLeftText className="pengumuman-icon" /></Link></h4>
                    <Card className='custom-card'>
                        <Card.Body className='card-body-scrollable'>
                            <Stack gap={2}>
                                {perwalianData.map((rowData, index) => (
                                <div key={index} className='perwalian-container'>
                                    <div className="perwalian-table">
                                        <div className="perwalian-row">
                                            <div className="perwalian-cell" style={{width: '10%'}}>
                                                <Image
                                                    width={64}
                                                    height={64}
                                                    className="mr-3"
                                                    src={rowData.profileImage}
                                                    alt="Profile Picture"
                                                    roundedCircle
                                                />
                                            </div>
                                            <div className="perwalian-cell" style={{textAlign: 'left', width: '30%'}}>
                                                <p>{rowData.name}</p>
                                                <p>{rowData.nim}</p>
                                            </div>
                                            <div className="perwalian-cell" style={{textAlign: 'left', width: '40%'}}>
                                                <p>info: {rowData.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </Stack>
                        </Card.Body>
                    </Card>
                </div>
                <div className="academic-status-box1" >
                    <h4><RiAlarmWarningFill size={30}/> Status Mahasiswa</h4>
                    <Card className='custom-card'>
                        <Card.Body className='card-body-scrollable'>
                            <Stack gap={2}>
                                {perwalianData.map((rowData, index) => (
                                <div key={index} className='perwalian-container'>
                                    <div className="perwalian-table">
                                        <div className="perwalian-row">
                                            <div className="perwalian-cell" style={{width: '10%'}}>
                                                <Image
                                                    width={64}
                                                    height={64}
                                                    className="mr-3"
                                                    src={rowData.profileImage}
                                                    alt="Profile Picture"
                                                    roundedCircle
                                                />
                                            </div>
                                            <div className="perwalian-cell" style={{textAlign: 'left', width: '30%'}}>
                                                <p>{rowData.name}</p>
                                                <p>{rowData.nim}</p>
                                            </div>
                                            <div className="perwalian-cell" style={{textAlign: 'center', width: '20%'}}>
                                                {rowData.status === 'aman' && <GoDotFill size={50} color="green" />}
                                                {rowData.status === 'kendala' && <GoDotFill size={50} color="orange" />}
                                                {rowData.status === 'tidak aman' && <GoDotFill  size={50}color="red" />}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </Stack>
                        </Card.Body>
                    </Card>
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

export default DosenHome;