import React, {useState, useEffect}from 'react';
import { Card, Button, Form, FormControl, Table, Modal } from 'react-bootstrap';
import { BsFolderSymlinkFill } from "react-icons/bs";
import './DataGPM.css'

function DataDosen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredGpm, setFilteredGpm] = useState([]);
    const [selectedGpm, setSelectedGpm] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState(selectedGpm.pass);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const results = Gpm.filter(Gpm =>
            Gpm.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredGpm(results);
    }, [searchTerm]);


    const Gpm = [
        { id: 1, name: 'Ariz Muhammad Fajar', nip: '2222222222',  address: 'Padang, Indonesia', phone: '081234567890', status: 'Dosen & GPM' },
        { id: 2, name: 'Fitra', nip: '3333333333',  address: 'Jakarta, Indonesia', phone: '081234567890', status: 'Dosen' },
        { id: 3, name: 'Marul', nip: '444444444',  address: 'Pati, Indonesia', phone: '081234567890', status: 'Dosen' }
    ];

    const openModal = (Gpm) => {
        setSelectedGpm(Gpm);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleHapusGpm = (Gpm) => {
        console.log(`Hapus GPM dengan NIP: ${Gpm.nip}`);
    };

    return (
        <div>
            <div className="pgmn-container">
                <div className="data-mhs-box">
                    <Card>
                        <Card.Header>
                            <h3>Data GPM</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-3">
                                <Form className="d-flex ms-auto">
                                    <FormControl
                                        type="search"
                                        placeholder="Cari Dosen"
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </Form>
                            </div>
                            <Table responsive="sm" striped bordered hover>
                                <thead text-align= ''>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>NIP</th>
                                        <th>Alamat</th>
                                        <th>Nomor HP</th>
                                        <th>Status</th>
                                        <th>Detail</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredGpm.map((Gpm, index) => (
                                        <tr key={Gpm.id}>
                                            <td>{index + 1}</td>
                                            <td>{Gpm.name}</td>
                                            <td>{Gpm.nip}</td>
                                            <td>{Gpm.address}</td>
                                            <td>{Gpm.phone}</td>
                                            <td>{Gpm.status}</td>
                                            <td>
                                                <BsFolderSymlinkFill style={{ cursor: 'pointer' }} onClick={() => openModal(Gpm)} />
                                            </td>
                                            <td>
                                                <div className='d-flex'>
                                                    <Button
                                                        className='small-btn'
                                                        variant="danger"
                                                        onClick={() => handleHapusGpm(Gpm)}
                                                    >
                                                        Hapus GPM
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Data GPM</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <img
                            src={selectedGpm.profilePicture}
                            alt="Profile"
                            className="modal-profile-picture"
                        />
                        <div className="modal-info">
                            <div className="modal-info-row">
                                <span className="modal-info-label">Nama</span>
                                <span className="modal-info-value">: {selectedGpm.name}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">NIP</span>
                                <span className="modal-info-value">: {selectedGpm.nip}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Alamat</span>
                                <span className="modal-info-value">: {selectedGpm.address}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Nomor HP</span>
                                <span className="modal-info-value">: {selectedGpm.phone}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Prodi</span>
                                <span className="modal-info-value">: {selectedGpm.prodi}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Fakultas</span>
                                <span className="modal-info-value">: {selectedGpm.faculty}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Password</span>
                                <div className="password-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="password-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="eye-icon" onClick={toggleShowPassword}>
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default DataDosen;