import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsPersonCircle, BsBellFill, BsClipboard2Check, BsSpeedometer2, BsCalendar3 } from "react-icons/bs";
import { IoIosSave } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './DetailMahasiswa.css'


function DetailMahasiswa({ mahasiswaId }) {
    // Di sini Anda dapat melakukan logika untuk mengambil detail mahasiswa berdasarkan ID dari backend atau dari data yang sudah Anda miliki

    // Contoh penggunaan:
    // const detailMahasiswa = fetchDataMahasiswaById(mahasiswaId);

    // Kemudian tampilkan detail mahasiswa di dalam komponen ini

    const navigate = useNavigate();

    // Handle klik tombol "Back"
    const handleBack = () => {
        navigate('/dosen/perwalian'); // Mengarahkan ke path '/dosen/perwalian'
    };

    return (
        <div className="detail-container">
            <div className="btn-back">
                <Button variant="secondary" onClick={handleBack}  >Back</Button>
            </div>
            <div className="prwln-box">
                <div className="icon-text-container-center">
                    <h5>Perwalian</h5>
                </div>
                <hr />
                <div className='icon-form-container'>
                    <div className="icon">
                        <BsPersonCircle className="lb-light" size="100px" />
                    </div>
                    <div className="form-container">
                        <Form>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Nama :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>NIM :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>IPk :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>SKS :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Alamat :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Nomor HP :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Uraian :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Masalah Akademik :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Rekomendasi :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className='btn-submit'>
                        <Button variant="primary" type="submit"><IoIosSave size={20} /> Save</Button>
                </div>
            </div>
        </div>
    );
}

export default DetailMahasiswa;