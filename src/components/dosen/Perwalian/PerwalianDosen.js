import React, {useState, useEffect, useRef}from 'react';
import { Tab, Tabs, Container, Row, Col, Card, Button, Form, FormControl, Table, Pagination, Dropdown } from 'react-bootstrap';
import { BsFiletypePdf, BsCheckCircle, BsFolderSymlinkFill } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiAlarmWarningFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import './PerwalianDosen.css'

function PerwalianDosen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMahasiswa, setFilteredMahasiswa] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [mahasiswaPerPage, setMahasiswaPerPage] = useState(20);
    const navigate = useNavigate();

    useEffect(() => {
        const results = Mahasiswa.filter(Mahasiswa =>
            Mahasiswa.name.toLowerCase().includes(searchTerm.toLowerCase())||
            Mahasiswa.nim.includes(searchTerm)
        );
        setFilteredMahasiswa(results);
        
    }, [searchTerm]);
    
    const handleDetailClick = (MahasiswaId) => {
        // Menggunakan fungsi navigate untuk navigasi ke halaman detail
        navigate(`/dosen/perwalian/detail/${MahasiswaId}`);
    };

    const Mahasiswa = [
        { id: 1, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman', date:'Senin, 29 April 2024', uraian: 'Awal Kuliah', problem: 'Sulit Belajar', clock:'07.00' },
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

    // Mengatur index data mahasiswa pertama dan terakhir pada setiap halaman
    const indexOfLastMahasiswa = currentPage * mahasiswaPerPage;
    const indexOfFirstMahasiswa = indexOfLastMahasiswa - mahasiswaPerPage;
    const currentMahasiswa = filteredMahasiswa.slice(indexOfFirstMahasiswa, indexOfLastMahasiswa);

    // Mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                                    {/* Tabel untuk menampilkan Permintaan Perwalian */}
                                    <Table responsive="sm" striped bordered hover>
                                        <thead text-align= ''>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>NIM</th>
                                                <th>Semester</th>
                                                <th>Alamat</th>
                                                <th>Nomor HP</th>
                                                <th>Peringatan</th>
                                                <th>Detail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentMahasiswa.map((mhs, index) => (
                                                <tr key={mhs.id}>
                                                    <td>{indexOfFirstMahasiswa + index + 1}</td>
                                                    <td>{mhs.name}</td>
                                                    <td>{mhs.nim}</td>
                                                    <td>{mhs.semester}</td>
                                                    <td>{mhs.address}</td>
                                                    <td>{mhs.phone}</td>
                                                    <td>
                                                        {mhs.status === 'aman' && <RiAlarmWarningFill color="green" />}
                                                        {mhs.status === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                        {mhs.status === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                                    </td>
                                                    <td>
                                                        <BsFolderSymlinkFill onClick={() => handleDetailClick(mhs.id)} style={{ cursor: 'pointer' }} />
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
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(20)}>20</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(50)}>50</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(100)}>100</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                &nbsp; Mahasiswa per Halaman
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
                                    {/* Tabel untuk menampilkan Permintaan Perwalian */}
                                    <Table responsive="sm" striped bordered hover>
                                    <thead text-align= ''>
                                            <tr>
                                                <th>No</th>
                                                <th>Hari</th>
                                                <th>Nama</th>
                                                <th>NIM</th>
                                                <th>Uraian</th>
                                                <th>Masalah Akademik</th>
                                                <th>Waktu</th>
                                                <th>Peringatan</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentMahasiswa.map((mhs, index) => (
                                                <tr key={mhs.id}>
                                                    <td>{indexOfFirstMahasiswa + index + 1}</td>
                                                    <td>{mhs.date}</td>
                                                    <td>{mhs.name}</td>
                                                    <td>{mhs.nim}</td>
                                                    <td>{mhs.uraian}</td>
                                                    <td>{mhs.problem}</td>
                                                    <td>{mhs.clock}</td>
                                                    <td>
                                                        {mhs.status === 'aman' && <RiAlarmWarningFill color="green" />}
                                                        {mhs.status === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                        {mhs.status === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                                    </td>
                                                    <td>
                                                    <Button variant='danger' style={{ marginRight: '5px' }}><IoMdCloseCircleOutline /> Reject</Button>
                                                    <Button variant='success'><BsCheckCircle /> Approve</Button>
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
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(20)}>20</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(50)}>50</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(100)}>100</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                &nbsp; Mahasiswa per Halaman
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
                                    <thead text-align= ''>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>NIM</th>
                                                <th>Semester</th>
                                                <th>Alamat</th>
                                                <th>Nomor HP</th>
                                                <th>Peringatan</th>
                                                <th>Detail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentMahasiswa.map((mhs, index) => (
                                                <tr key={mhs.id}>
                                                    <td>{indexOfFirstMahasiswa + index + 1}</td>
                                                    <td>{mhs.name}</td>
                                                    <td>{mhs.nim}</td>
                                                    <td>{mhs.semester}</td>
                                                    <td>{mhs.address}</td>
                                                    <td>{mhs.phone}</td>
                                                    <td>
                                                        {mhs.status === 'aman' && <RiAlarmWarningFill color="green" />}
                                                        {mhs.status === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                        {mhs.status === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                                    </td>
                                                    <td>
                                                        <Button variant='danger'><BsFiletypePdf /> Download PDF/Print</Button>
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
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(20)}>20</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(50)}>50</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setMahasiswaPerPage(100)}>100</Dropdown.Item>
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
        </div>
    );
}

export default PerwalianDosen;