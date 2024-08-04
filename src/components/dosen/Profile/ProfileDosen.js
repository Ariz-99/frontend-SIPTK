import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsPersonCircle } from "react-icons/bs";
import { IoIosSave } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './ProfileDosen.css'


function ProfileDosen() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // Handle klik tombol "Back"
    const handleBack = () => {
        navigate('/dosen'); // Mengarahkan ke path '/dosen/perwalian'
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="detail-container">
            <div className="btn-kembali">
                <Button variant="primary" onClick={handleBack} className="back-button">Kembali</Button>
            </div>
            <div className="profile-box">
                <div className="icon-text-container-center">
                    <h5>Profile Dosen</h5>
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
                                <Form.Label>NIP :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Nomor HP :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Alamat :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Prodi :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Fakultas :</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{textAlign: 'left'}}>
                                <Form.Label>Password :</Form.Label>
                                <div className="password-container">
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        className="password-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="eye-icon" onClick={toggleShowPassword}>
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </span>
                                </div>
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

export default ProfileDosen;