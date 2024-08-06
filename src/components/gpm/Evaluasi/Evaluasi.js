import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Form, FormControl, Table, Pagination, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import { BsFiletypePdf, BsPersonCircle, BsFolderSymlinkFill } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiAlarmWarningFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import './Evaluasi.css'

function Evaluasi() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMahasiswa, setFilteredMahasiswa] = useState([]);
    const [nimFilter, setNimFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [semesterFilter, setSemesterFilter] = useState('');
    const [alertFilter, setalertFilter] = useState('semua');

    const [currentPage, setCurrentPage] = useState(1);
    const [mahasiswaPerPage, setMahasiswaPerPage] = useState(20);
    const [selectedMahasiswa, setSelectedMahasiswa] = useState({});

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const results = Mahasiswa.filter(mhs =>
            (alertFilter === 'semua' || mhs.alert === alertFilter) &&
            (nimFilter === '' || mhs.nim.includes(nimFilter)) &&
            (nameFilter === '' || mhs.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
            (semesterFilter === '' || mhs.semester.toString() === semesterFilter)
        );
        setFilteredMahasiswa(results);
    }, [nimFilter, nameFilter, semesterFilter, alertFilter]);


    const Mahasiswa = [
        { id: 1, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman', date: 'Senin, 29 April 2024', uraian: 'Awal Kuliah', problem: 'Sulit Belajar', clock: '07.00' },
        { id: 2, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 3, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 4, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 5, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 6, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 7, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 8, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 9, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 10, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 11, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 12, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 13, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 14, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 15, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 16, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 17, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 18, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 19, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 20, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 21, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 22, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 23, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 24, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 25, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 26, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 27, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 28, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 29, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 30, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 31, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 32, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 33, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 34, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 35, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 36, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 37, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 38, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 39, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 40, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 41, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 42, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 43, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 44, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 45, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 46, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 47, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 48, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 49, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 50, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 51, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 52, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 53, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 54, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 55, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 56, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 57, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 58, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 59, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 60, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
    ];

    const openModal = (mhs) => {
        setSelectedMahasiswa(mhs);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleMahasiswaPerPageChange = (value) => {
        setMahasiswaPerPage(value);
        setCurrentPage(1);
    };

    // Mengatur index data mahasiswa pertama dan terakhir pada setiap halaman
    const indexOfLastMahasiswa = currentPage * mahasiswaPerPage;
    const indexOfFirstMahasiswa = indexOfLastMahasiswa - mahasiswaPerPage;
    const currentMahasiswa = filteredMahasiswa.slice(indexOfFirstMahasiswa, indexOfLastMahasiswa);

    // Mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Card>
                <Card.Header>
                    <h3>Evaluasi Mahasiswa</h3>
                </Card.Header>
                <Card.Body>
                    {/* Tabel untuk menampilkan Permintaan Perwalian */}
                    <Table responsive="sm" striped bordered hover>
                        <thead text-align=''>
                            <tr>
                                <th>No</th>
                                <th>NIM</th>
                                <th>Nama</th>
                                <th>Semester</th>
                                <th>Peringatan</th>
                                <th>Nomor HP</th>
                                <th>Detail</th>
                                <th>Hasil Perwalian</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>
                                    <FormControl
                                        type="text"
                                        placeholder="Filter NIM"
                                        className="me-2"
                                        value={nimFilter}
                                        onChange={(e) => setNimFilter(e.target.value)}
                                    />
                                </th>
                                <th>
                                    <FormControl
                                        type="text"
                                        placeholder="Filter Nama"
                                        className="me-2"
                                        value={nameFilter}
                                        onChange={(e) => setNameFilter(e.target.value)}
                                    />
                                </th>
                                <th>
                                    <FormControl
                                        type="text"
                                        placeholder="Filter Semester"
                                        className="me-2"
                                        value={semesterFilter}
                                        onChange={(e) => setSemesterFilter(e.target.value)}
                                    />
                                </th>
                                <th>
                                    <DropdownButton title={alertFilter === 'semua' ? 'semua' : alertFilter} onSelect={setalertFilter}>
                                        <Dropdown.Item eventKey="semua">Semua</Dropdown.Item>
                                        <Dropdown.Item eventKey="aman"><RiAlarmWarningFill color="green" /> Aman </Dropdown.Item>
                                        <Dropdown.Item eventKey="kendala"><RiAlarmWarningFill color="orange" /> Terkendala </Dropdown.Item>
                                        <Dropdown.Item eventKey="tidak aman"><RiAlarmWarningFill color="red" /> Tidak Aman </Dropdown.Item>
                                    </DropdownButton>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentMahasiswa.map((mhs, index) => (
                                <tr key={mhs.id}>
                                    <td>{indexOfFirstMahasiswa + index + 1}</td>
                                    <td>{mhs.nim}</td>
                                    <td>{mhs.name}</td>
                                    <td>{mhs.semester}</td>
                                    <td>
                                        {mhs.status === 'aman' && <RiAlarmWarningFill color="green" />}
                                        {mhs.status === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                        {mhs.status === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                    </td>
                                    <td>{mhs.phone}</td>
                                    <td>
                                        <BsFolderSymlinkFill onClick={() => openModal(mhs)} style={{ cursor: 'pointer' }} />
                                    </td>
                                    <td>
                                        <Button variant='danger' className='small-pdf'><BsFiletypePdf /> Download PDF/Print</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {mahasiswaPerPage}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleMahasiswaPerPageChange(20)}>20</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleMahasiswaPerPageChange(50)}>50</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleMahasiswaPerPageChange(100)}>100</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Pagination>
                            {Array.from({ length: Math.ceil(filteredMahasiswa.length / mahasiswaPerPage) }, (_, i) => (
                                <Pagination.Item key={i + 1} onClick={() => paginate(i + 1)} active={i + 1 === currentPage}>
                                    {i + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Data Mahasiswa</Modal.Title>
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
                                <span className="modal-info-value">: {selectedMahasiswa.name}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">NIM</span>
                                <span className="modal-info-value">: {selectedMahasiswa.nim}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Dosen Wali</span>
                                <span className="modal-info-value">: {selectedMahasiswa.Dwali}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">IPK</span>
                                <span className="modal-info-value">: {selectedMahasiswa.ipk}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">SKS</span>
                                <span className="modal-info-value">: {selectedMahasiswa.sks}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Alamat</span>
                                <span className="modal-info-value">: {selectedMahasiswa.address}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Uraian</span>
                                <span className="modal-info-value">: {selectedMahasiswa.phone}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Masalah Akamdemik</span>
                                <span className="modal-info-value">: {selectedMahasiswa.prodi}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Rekomendasi</span>
                                <span className="modal-info-value">: {selectedMahasiswa.faculty}</span>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Evaluasi;