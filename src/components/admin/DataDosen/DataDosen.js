import React, {useState, useEffect}from 'react';
import { Card, Button, FormControl, Table, Modal } from 'react-bootstrap';
import { BsFolderSymlinkFill, BsPersonCircle } from "react-icons/bs";
import './DataDosen.css'

function DataDosen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDosen, setFilteredDosen] = useState([]);
    const [selectedDosen, setSelectedDosen] = useState({});
    const [nipFilter, setNipFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState(selectedDosen.pass);
    const [showPassword, setShowPassword] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dosenPerPage, setDosenPerPage] = useState(20);

    useEffect(() => {
        const results = Dosen.filter(Dosen =>
            (nameFilter === '' || Dosen.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
            (nipFilter === '' || Dosen.nip.includes(nipFilter))
        );
        setFilteredDosen(results);
    }, [nipFilter, nameFilter]);

  
    const Dosen = [
        { id: 1, name: 'Ariz Muhammad Fajar', nip: '2222222222',  address: 'Padang, Indonesia', phone: '081234567890', status: 'Dosen & GPM' },
        { id: 2, name: 'Fitra', nip: '3333333333',  address: 'Jakarta, Indonesia', phone: '081234567890', status: 'Dosen' },
        { id: 3, name: 'Marul', nip: '444444444',  address: 'Pati, Indonesia', phone: '081234567890', status: 'Dosen' }
    ];

    const openModal = (Dosen) => {
        setSelectedDosen(Dosen);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleHapusDosen = (Dosen) => {
        console.log(`Hapus Dosen dengan NIP: ${Dosen.nip}`);
    };

    return (
        <div>
            <div className="pgmn-container">
                <div className="data-mhs-box">
                    <Card>
                        <Card.Header>
                            <h3>Data Dosen</h3>
                        </Card.Header>
                        <Card.Body>
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
                                    <tr>
                                        <th></th>
                                        <th>
                                            <FormControl
                                                type="text"
                                                placeholder="Filter Nama"
                                                className="me-2"
                                                value={nipFilter}
                                                onChange={(e) => setNameFilter(e.target.value)}
                                            />
                                        </th>
                                        <th>
                                            <FormControl
                                                type="text"
                                                placeholder="Filter NIP"
                                                className="me-2"
                                                value={nameFilter}
                                                onChange={(e) => setNipFilter(e.target.value)}
                                            />
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDosen.map((Dosen, index) => (
                                        <tr key={Dosen.id}>
                                            <td>{index + 1}</td>
                                            <td>{Dosen.name}</td>
                                            <td>{Dosen.nip}</td>
                                            <td>{Dosen.address}</td>
                                            <td>{Dosen.phone}</td>
                                            <td>{Dosen.status}</td>
                                            <td>
                                                <BsFolderSymlinkFill style={{ cursor: 'pointer' }} onClick={() => openModal(Dosen)} />
                                            </td>
                                            <td>
                                                <div className='d-flex' style={{ justifyContent:'center'}}>
                                                    <Button
                                                        className='small-btn'
                                                        variant="danger"
                                                        onClick={() => handleHapusDosen(Dosen)}
                                                    >
                                                        Hapus Dosen
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
                    <Modal.Title>Data Dosen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <BsPersonCircle
                            className="modal-profile-icon"
                            size={70} // Sesuaikan ukuran ikon
                            color="#555" // Sesuaikan warna ikon
                        />
                        <div className="modal-info">
                            <div className="modal-info-row">
                                <span className="modal-info-label">Nama</span>
                                <span className="modal-info-value">: {selectedDosen.name}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">NIP</span>
                                <span className="modal-info-value">: {selectedDosen.nip}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Alamat</span>
                                <span className="modal-info-value">: {selectedDosen.address}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Nomor HP</span>
                                <span className="modal-info-value">: {selectedDosen.phone}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Prodi</span>
                                <span className="modal-info-value">: {selectedDosen.prodi}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Fakultas</span>
                                <span className="modal-info-value">: {selectedDosen.faculty}</span>
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