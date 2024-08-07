import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Container, Row, Col, Card, Button, Form, FormControl, Table, Pagination, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import { BsFiletypePdf, BsFolderSymlinkFill, BsPersonCircle } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiAlarmWarningFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import './PerwalianDosen.css'

function PerwalianDosen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMahasiswa, setFilteredMahasiswa] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [mahasiswaPerPage, setMahasiswaPerPage] = useState(20);
    const [showModal, setShowModal] = useState(false);
    const [selectedMahasiswa, setSelectedMahasiswa] = useState({});
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedMahasiswaForUpdate, setSelectedMahasiswaForUpdate] = useState({});
    const navigate = useNavigate();
    const [recommendation, setRecommendation] = useState(selectedMahasiswa.recommend || '');

    const [nimFilter, setNimFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [semesterFilter, setSemesterFilter] = useState('');
    const [alertFilter, setAlertFilter] = useState('semua');
    const [statusFilter, setStatusFilter] = useState('semua');
    const [nsurveiFilter, setNsurveiFilter] = useState('semua');

    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const results = Mahasiswa.filter(mhs =>
            (alertFilter === 'semua' || mhs.alert === alertFilter) &&
            (statusFilter === 'semua' || mhs.status === statusFilter) &&
            (nsurveiFilter === 'semua' || categorizeNsurvei(mhs.nsurvei).Text === nsurveiFilter) &&
            (nimFilter === '' || mhs.nim.includes(nimFilter)) &&
            (nameFilter === '' || mhs.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
            (semesterFilter === '' || mhs.semester.toString() === semesterFilter)
        );
        setFilteredMahasiswa(results);
    }, [nimFilter, nameFilter, semesterFilter, alertFilter, statusFilter, nsurveiFilter]);
    

    const Mahasiswa = [
        { id: 1, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', date: 'Senin, 29 April 2024', uraian: 'Awal Kuliah', problem: 'Sulit Belajar', clock: '07.00', nsurvei: 25 },
        { id: 2, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 45 },
        { id: 3, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 32 },
        { id: 4, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 12 },
        { id: 5, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 60 },
        { id: 6, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 8 },
        { id: 7, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 30 },
        { id: 8, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 27 },
        { id: 9, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 50 },
        { id: 10, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 14 },
        { id: 11, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 55 },
        { id: 12, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 21 },
        { id: 13, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 17 },
        { id: 14, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 42 },
        { id: 15, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 38 },
        { id: 16, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 92 },
        { id: 17, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 70 },
        { id: 18, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 64 },
        { id: 19, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 49 },
        { id: 20, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 22 },
        { id: 21, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 15 },
        { id: 22, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 91 },
        { id: 23, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 41 },
        { id: 24, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 34 },
        { id: 25, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 19 },
        { id: 26, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 56 },
        { id: 27, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 73 },
        { id: 28, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 81 },
        { id: 29, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 28 },
        { id: 30, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 39 },
        { id: 31, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 33 },
        { id: 32, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 46 },
        { id: 33, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 29 },
        { id: 34, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 6 },
        { id: 35, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 12 },
        { id: 36, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 5 },
        { id: 37, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 85 },
        { id: 38, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 67 },
        { id: 39, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 48 },
        { id: 40, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 22 },
        { id: 41, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 40 },
        { id: 42, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 13 },
        { id: 43, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 74 },
        { id: 44, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 36 },
        { id: 45, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 7 },
        { id: 46, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 63 },
        { id: 47, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 55 },
        { id: 48, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 38 },
        { id: 49, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 20 },
        { id: 50, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 47 },
        { id: 51, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 59 },
        { id: 52, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 30 },
        { id: 53, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 9 },
        { id: 54, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 58 },
        { id: 55, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 70 },
        { id: 56, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 22 },
        { id: 57, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 33 },
        { id: 58, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', alert: 'aman', nsurvei: 4 },
        { id: 59, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', alert: 'kendala', nsurvei: 82 },
        { id: 60, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', alert: 'tidak aman', nsurvei: 52 }
    ];

    const categorizeNsurvei = (nsurvei) => {
        if (nsurvei >= 0 && nsurvei <= 23) return { Text: 'Tidak Stress', color: 'green' };
        if (nsurvei >= 24 && nsurvei <= 46) return { Text: 'Kurang Stress', color: 'blue' };
        if (nsurvei >= 47 && nsurvei <= 69) return { Text: 'Stress', color: 'orange' };
        if (nsurvei >= 70 && nsurvei <= 92) return { Text: 'Sangat Stress', color: 'red' };
        return { level: 'unknown', color: 'gray' }; // default color for out-of-range values
    };


    const openModal = (mhs) => {
        setSelectedMahasiswa(mhs);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const openUpdateModal = (mhs) => {
        setSelectedMahasiswaForUpdate(mhs);
        setShowUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    };

    // Mengatur index data mahasiswa pertama dan terakhir pada setiap halaman
    const indexOfLastMahasiswa = currentPage * mahasiswaPerPage;
    const indexOfFirstMahasiswa = indexOfLastMahasiswa - mahasiswaPerPage;
    const currentMahasiswa = filteredMahasiswa.slice(indexOfFirstMahasiswa, indexOfLastMahasiswa);

    // Mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleRecommendationChange = (e) => {
        setRecommendation(e.target.value);
    };

    const handleMahasiswaPerPageChange = (value) => {
        setMahasiswaPerPage(value);
        setCurrentPage(1);
    };

    const handleFileUpload = () => {
        console.log("File yang dipilih:", selectedFile);

    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div>
            <p className="pengumuman-dashboard-header">PERWALIAN</p>
            <div className="pgmn-container">
                <div className="prwln-dsn-box">
                    <Tabs
                        defaultActiveKey="data-mahasiswa"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="data-mahasiswa" title="Data Mahasiswa">
                            <Card>
                                <Card.Body>
                                    <Table responsive="sm" striped bordered hover>
                                        <thead text-align=''>
                                            <tr>
                                                <th>No</th>
                                                <th>NIM</th>
                                                <th>Nama</th>
                                                <th>Semester</th>
                                                <th>Status</th>
                                                <th>Peringatan</th>
                                                <th>Nomor HP</th>
                                                <th>Detail</th>
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
                                                    <DropdownButton title={statusFilter === 'semua' ? 'semua' : statusFilter} onSelect={setStatusFilter}>
                                                        <Dropdown.Item eventKey="semua">Semua</Dropdown.Item>
                                                        <Dropdown.Item eventKey="aktif"> aktif </Dropdown.Item>
                                                        <Dropdown.Item eventKey="cuti"> cuti </Dropdown.Item>
                                                    </DropdownButton>
                                                </th>
                                                <th>
                                                    <DropdownButton title={alertFilter === 'semua' ? 'semua' : alertFilter} onSelect={setAlertFilter}>
                                                        <Dropdown.Item eventKey="semua">Semua</Dropdown.Item>
                                                        <Dropdown.Item eventKey="aman"><RiAlarmWarningFill color="green" /> Aman </Dropdown.Item>
                                                        <Dropdown.Item eventKey="kendala"><RiAlarmWarningFill color="orange" /> Terkendala </Dropdown.Item>
                                                        <Dropdown.Item eventKey="tidak aman"><RiAlarmWarningFill color="red" /> Tidak Aman </Dropdown.Item>
                                                    </DropdownButton>
                                                </th>
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
                                                    <td>{mhs.status}</td>
                                                    <td>
                                                        {mhs.alert === 'aman' && <RiAlarmWarningFill color="green" />}
                                                        {mhs.alert === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                        {mhs.alert === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                                    </td>
                                                    <td>{mhs.phone}</td>
                                                    <td>
                                                        <BsFolderSymlinkFill style={{ cursor: 'pointer' }} onClick={() => openModal(mhs)} />
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
                        </Tab>
                        <Tab eventKey="permintaan-perwalian" title="Permintaan Perwalian">
                            <Card>
                                <Card.Body>
                                    {/* Tabel untuk menampilkan Permintaan Perwalian */}
                                    <Table responsive="sm" striped bordered hover>
                                        <thead text-align=''>
                                            <tr>
                                                <th>No</th>
                                                <th>NIM</th>
                                                <th>Nama</th>
                                                <th>Uraian</th>
                                                <th>Masalah Akademik</th>
                                                <th>Waktu</th>
                                                <th>Peringatan</th>
                                                <th>Aksi</th>
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
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th>
                                                    <DropdownButton title={alertFilter === 'semua' ? 'semua' : alertFilter} onSelect={setAlertFilter}>
                                                        <Dropdown.Item eventKey="semua">Semua</Dropdown.Item>
                                                        <Dropdown.Item eventKey="aman"><RiAlarmWarningFill color="green" /> Aman </Dropdown.Item>
                                                        <Dropdown.Item eventKey="kendala"><RiAlarmWarningFill color="orange" /> Terkendala </Dropdown.Item>
                                                        <Dropdown.Item eventKey="tidak aman"><RiAlarmWarningFill color="red" /> Tidak Aman </Dropdown.Item>
                                                    </DropdownButton>
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentMahasiswa.map((mhs, index) => (
                                                <tr key={mhs.id}>
                                                    <td>{indexOfFirstMahasiswa + index + 1}</td>
                                                    <td>{mhs.nim}</td>
                                                    <td>{mhs.name}</td>
                                                    <td>{mhs.uraian}</td>
                                                    <td>{mhs.problem}</td>
                                                    <td>{mhs.clock}</td>
                                                    <td>
                                                        {mhs.alert === 'aman' && <RiAlarmWarningFill color="green" />}
                                                        {mhs.alert === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                        {mhs.alert === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                                    </td>
                                                    <td>
                                                        <Button variant='warning' onClick={() => openUpdateModal(mhs)}>Update</Button>
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
                        </Tab>
                        <Tab eventKey="hasil-survei" title="Hasil Survei">
                            <Card>
                                <Card.Body>
                                    {/* Tabel untuk menampilkan Permintaan Perwalian */}
                                    <Table responsive="sm" striped bordered hover>
                                        <thead text-align=''>
                                            <tr>
                                                <th>No</th>
                                                <th>NIM</th>
                                                <th>Nama</th>
                                                <th>Semester</th>
                                                <th>No Hp</th>
                                                <th>Nilai Survei</th>
                                                <th>Kategori</th>
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
                                                <th></th>
                                                <th></th>
                                                <th>
                                                    <DropdownButton title={nsurveiFilter === 'semua' ? 'semua' : nsurveiFilter} onSelect={(e) => setNsurveiFilter(e)}>
                                                        <Dropdown.Item eventKey="semua">Semua</Dropdown.Item>
                                                        <Dropdown.Item eventKey="Tidak Stress">Tidak Stress</Dropdown.Item>
                                                        <Dropdown.Item eventKey="Kurang Stress">Kurang Stress</Dropdown.Item>
                                                        <Dropdown.Item eventKey="Stress">Stress</Dropdown.Item>
                                                        <Dropdown.Item eventKey="Sangat Stress">Sangat Stress</Dropdown.Item>
                                                    </DropdownButton>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentMahasiswa
                                            .map((mhs, index) => (
                                                <tr key={mhs.id}>
                                                    <td>{indexOfFirstMahasiswa + index + 1}</td>
                                                    <td>{mhs.nim}</td>
                                                    <td>{mhs.name}</td>
                                                    <td>{mhs.semester}</td>
                                                    <td>{mhs.phone}</td>
                                                    <td>{mhs.nsurvei}</td>
                                                    <td style={{ color: categorizeNsurvei(mhs.nsurvei).color }}>
                                                        {categorizeNsurvei(mhs.nsurvei).Text}
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
                        </Tab>
                        <Tab eventKey="hasil-perwalian" title="Hasil Perwalian">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-end mb-3">
                                        <Form className="d-flex">
                                            <FormControl
                                                type="search"
                                                placeholder="Cari Mahasiswa"
                                                className="me-2"
                                                aria-label="Search"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </Form>
                                    </div>
                                    {/* Tabel untuk menampilkan data mahasiswa */}
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
                                                    <DropdownButton title={alertFilter === 'semua' ? 'semua' : alertFilter} onSelect={setAlertFilter}>
                                                        <Dropdown.Item eventKey="semua">Semua</Dropdown.Item>
                                                        <Dropdown.Item eventKey="aman"><RiAlarmWarningFill color="green" /> Aman </Dropdown.Item>
                                                        <Dropdown.Item eventKey="kendala"><RiAlarmWarningFill color="orange" /> Terkendala </Dropdown.Item>
                                                        <Dropdown.Item eventKey="tidak aman"><RiAlarmWarningFill color="red" /> Tidak Aman </Dropdown.Item>
                                                    </DropdownButton>
                                                </th>
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
                                                        {mhs.alert === 'aman' && <RiAlarmWarningFill color="green" />}
                                                        {mhs.alert === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                        {mhs.alert === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                                    </td>
                                                    <td>{mhs.phone}</td>
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
                        </Tab>
                    </Tabs>
                </div>
            </div>
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
                                <span className="modal-info-label">Nomor HP</span>
                                <span className="modal-info-value">: {selectedMahasiswa.phone}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Prodi</span>
                                <span className="modal-info-value">: {selectedMahasiswa.prodi}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Fakultas</span>
                                <span className="modal-info-value">: {selectedMahasiswa.faculty}</span>
                            </div>
                            <div className="modal-info-row">
                                <span className="modal-info-label">Semester</span>
                                <span className="modal-info-value">: {selectedMahasiswa.semester}</span>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
            <Modal show={showUpdateModal} onHide={closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Data Mahasiswa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <BsPersonCircle
                            className="profile-icon"
                            size={70}
                            color="#555"
                        />
                        <div className="info-section">
                            <div className="info-item">
                                <span className="label">Nama</span>
                                <span className="value">: {selectedMahasiswa.name}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">NIM</span>
                                <span className="value">: {selectedMahasiswa.nim}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Dosen Wali</span>
                                <span className="value">: {selectedMahasiswa.Dwali}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">IPK</span>
                                <span className="value">: {selectedMahasiswa.ipk}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">SKS</span>
                                <span className="value">: {selectedMahasiswa.sks}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Alamat</span>
                                <span className="value">: {selectedMahasiswa.address}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Nomor HP</span>
                                <span className="value">: {selectedMahasiswa.phone}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Uraian</span>
                                <span className="value">: {selectedMahasiswa.uraian}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Masalah Akademik</span>
                                <span className="value">: {selectedMahasiswa.problem}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Rekomendasi</span>
                                <div className='value'>
                                    <textarea
                                        value={recommendation}
                                        onChange={handleRecommendationChange}
                                        rows="4"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="label">Upload Paraf</span>
                                <div className='value'>
                                    <input
                                        type="file"
                                        accept=".jpg,.jpeg"
                                        onChange={handleFileChange}
                                    /></div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PerwalianDosen;