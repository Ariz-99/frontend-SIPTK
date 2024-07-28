import React, { useState, useEffect } from 'react';
import { Card, FormControl, Table, Dropdown, DropdownButton, Pagination, Modal, Button } from 'react-bootstrap';
import { BsFolderSymlinkFill } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";
import './DataMahasiswa.css';

function DataMahasiswa() {
    const [currentPage, setCurrentPage] = useState(1);
    const [mahasiswaPerPage, setMahasiswaPerPage] = useState(20);
    const [nimFilter, setNimFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [semesterFilter, setSemesterFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('semua');
    const [filteredMahasiswa, setFilteredMahasiswa] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMahasiswa, setSelectedMahasiswa] = useState({});
    const [password, setPassword] = useState(selectedMahasiswa.pass);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const results = Mahasiswa.filter(mhs =>
            (statusFilter === 'semua' || mhs.status === statusFilter) &&
            (nimFilter === '' || mhs.nim.includes(nimFilter)) &&
            (nameFilter === '' || mhs.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
            (semesterFilter === '' || mhs.semester.toString() === semesterFilter)
        );
        setFilteredMahasiswa(results);
    }, [nimFilter, nameFilter, semesterFilter, statusFilter]);

    const Mahasiswa = [
        { id: 1, name: 'Ariz Muhammad Fajar', nim: '2222222222', semester: 8, address: 'Padang, Indonesia', phone: '081234567890', status: 'aman' },
        { id: 2, name: 'Fitra', nim: '3333333333', semester: 8, address: 'Jakarta, Indonesia', phone: '081234567890', status: 'kendala' },
        { id: 3, name: 'Marul', nim: '4444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' },
        { id: 4, name: 'Siti Rahma', nim: '5555555555', semester: 7, address: 'Bandung, Indonesia', phone: '081234567891', status: 'aman' },
        { id: 5, name: 'Budi Santoso', nim: '6666666666', semester: 6, address: 'Surabaya, Indonesia', phone: '081234567892', status: 'kendala' },
        { id: 6, name: 'Ahmad Ridho', nim: '7777777777', semester: 5, address: 'Yogyakarta, Indonesia', phone: '081234567893', status: 'tidak aman' },
        { id: 7, name: 'Indah Permata', nim: '8888888888', semester: 4, address: 'Malang, Indonesia', phone: '081234567894', status: 'aman' },
        { id: 8, name: 'Rizky Hidayat', nim: '9999999999', semester: 3, address: 'Semarang, Indonesia', phone: '081234567895', status: 'kendala' },
        { id: 9, name: 'Wahyu Putra', nim: '1010101010', semester: 2, address: 'Palembang, Indonesia', phone: '081234567896', status: 'tidak aman' },
        { id: 10, name: 'Dewi Anisa', nim: '1111111111', semester: 1, address: 'Banda Aceh, Indonesia', phone: '081234567897', status: 'aman' },
        { id: 11, name: 'Lukman Hakim', nim: '1212121212', semester: 8, address: 'Makassar, Indonesia', phone: '081234567898', status: 'kendala' },
        { id: 12, name: 'Sari Amalia', nim: '1313131313', semester: 8, address: 'Denpasar, Indonesia', phone: '081234567899', status: 'tidak aman' },
        { id: 13, name: 'Faisal Nur', nim: '1414141414', semester: 7, address: 'Balikpapan, Indonesia', phone: '081234567900', status: 'aman' },
        { id: 14, name: 'Nina Susanti', nim: '1515151515', semester: 6, address: 'Mataram, Indonesia', phone: '081234567901', status: 'kendala' },
        { id: 15, name: 'Hendri Wicaksono', nim: '1616161616', semester: 5, address: 'Jayapura, Indonesia', phone: '081234567902', status: 'tidak aman' },
        { id: 16, name: 'Maria Ulfa', nim: '1717171717', semester: 4, address: 'Pontianak, Indonesia', phone: '081234567903', status: 'aman' },
        { id: 17, name: 'Yoga Pratama', nim: '1818181818', semester: 3, address: 'Manado, Indonesia', phone: '081234567904', status: 'kendala' },
        { id: 18, name: 'Anisa Rahman', nim: '1919191919', semester: 2, address: 'Padang, Indonesia', phone: '081234567905', status: 'tidak aman' },
        { id: 19, name: 'Joko Susilo', nim: '2020202020', semester: 1, address: 'Medan, Indonesia', phone: '081234567906', status: 'aman' },
        { id: 20, name: 'Retno Wulandari', nim: '2121212121', semester: 8, address: 'Surakarta, Indonesia', phone: '081234567907', status: 'kendala' },
        { id: 21, name: 'Arman Fadli', nim: '2222222223', semester: 7, address: 'Pekanbaru, Indonesia', phone: '081234567908', status: 'aman' },
        { id: 22, name: 'Diana Nurul', nim: '2323232323', semester: 6, address: 'Depok, Indonesia', phone: '081234567909', status: 'tidak aman' },
        { id: 23, name: 'Surya Pratama', nim: '2424242424', semester: 5, address: 'Bekasi, Indonesia', phone: '081234567910', status: 'kendala' },
        { id: 24, name: 'Yusuf Alamsyah', nim: '2525252525', semester: 4, address: 'Sidoarjo, Indonesia', phone: '081234567911', status: 'aman' },
        { id: 25, name: 'Rina Setiawati', nim: '2626262626', semester: 3, address: 'Tangerang, Indonesia', phone: '081234567912', status: 'tidak aman' },
        { id: 26, name: 'Aditya Saputra', nim: '2727272727', semester: 2, address: 'Cirebon, Indonesia', phone: '081234567913', status: 'aman' },
        { id: 27, name: 'Fitri Ramadhani', nim: '2828282828', semester: 1, address: 'Bogor, Indonesia', phone: '081234567914', status: 'kendala' },
        { id: 28, name: 'Wulan Puspa', nim: '2929292929', semester: 8, address: 'Batam, Indonesia', phone: '081234567915', status: 'tidak aman' },
        { id: 29, name: 'Hana Permata', nim: '3030303030', semester: 7, address: 'Bengkulu, Indonesia', phone: '081234567916', status: 'aman' },
        { id: 30, name: 'Andi Surya', nim: '3131313131', semester: 6, address: 'Ambon, Indonesia', phone: '081234567917', status: 'kendala' },
        { id: 31, name: 'Rudi Hartono', nim: '3232323232', semester: 5, address: 'Samarinda, Indonesia', phone: '081234567918', status: 'tidak aman' },
        { id: 32, name: 'Maya Sari', nim: '3333333333', semester: 4, address: 'Madura, Indonesia', phone: '081234567919', status: 'aman' },
        { id: 33, name: 'Eko Wijaya', nim: '3434343434', semester: 3, address: 'Banten, Indonesia', phone: '081234567920', status: 'kendala' },
        { id: 34, name: 'Yuni Rahmawati', nim: '3535353535', semester: 2, address: 'Solo, Indonesia', phone: '081234567921', status: 'tidak aman' },
        { id: 35, name: 'Hendra Gunawan', nim: '3636363636', semester: 1, address: 'Palangkaraya, Indonesia', phone: '081234567922', status: 'aman' },
        { id: 36, name: 'Putri Lestari', nim: '3737373737', semester: 8, address: 'Banyuwangi, Indonesia', phone: '081234567923', status: 'kendala' },
        { id: 37, name: 'Agus Wibowo', nim: '3838383838', semester: 7, address: 'Jambi, Indonesia', phone: '081234567924', status: 'tidak aman' },
        { id: 38, name: 'Dewi Sartika', nim: '3939393939', semester: 6, address: 'Lampung, Indonesia', phone: '081234567925', status: 'aman' },
        { id: 39, name: 'Sandi Ramadhan', nim: '4040404040', semester: 5, address: 'Serang, Indonesia', phone: '081234567926', status: 'kendala' },
        { id: 40, name: 'Farah Diba', nim: '4141414141', semester: 4, address: 'Kediri, Indonesia', phone: '081234567927', status: 'tidak aman' },
        { id: 41, name: 'Rizal Fauzi', nim: '4242424242', semester: 3, address: 'Palu, Indonesia', phone: '081234567928', status: 'aman' },
        { id: 42, name: 'Dimas Setyawan', nim: '4343434343', semester: 2, address: 'Maluku, Indonesia', phone: '081234567929', status: 'kendala' },
        { id: 43, name: 'Nina Sari', nim: '4444444444', semester: 1, address: 'Tarakan, Indonesia', phone: '081234567930', status: 'tidak aman' },
        { id: 44, name: 'Siti Zulaika', nim: '4545454545', semester: 8, address: 'Manokwari, Indonesia', phone: '081234567931', status: 'aman' },
        { id: 45, name: 'Bayu Ardi', nim: '4646464646', semester: 7, address: 'Sorong, Indonesia', phone: '081234567932', status: 'kendala' },
        { id: 46, name: 'Rini Trias', nim: '4747474747', semester: 6, address: 'Kupang, Indonesia', phone: '081234567933', status: 'tidak aman' },
        { id: 47, name: 'Aulia Rizky', nim: '4848484848', semester: 5, address: 'Kendari, Indonesia', phone: '081234567934', status: 'aman' },
        { id: 48, name: 'Hasan Basri', nim: '4949494949', semester: 4, address: 'Ternate, Indonesia', phone: '081234567935', status: 'kendala' },
        { id: 49, name: 'Lisa Wijaya', nim: '5050505050', semester: 3, address: 'Nabire, Indonesia', phone: '081234567936', status: 'tidak aman' },
        { id: 50, name: 'Erik Purnama', nim: '5151515151', semester: 2, address: 'Biak, Indonesia', phone: '081234567937', status: 'aman' },
        { id: 51, name: 'Nur Aini', nim: '5252525252', semester: 1, address: 'Timika, Indonesia', phone: '081234567938', status: 'kendala' },
        { id: 52, name: 'Hilda Pertiwi', nim: '5353535353', semester: 8, address: 'Gorontalo, Indonesia', phone: '081234567939', status: 'tidak aman' },
        { id: 53, name: 'Bagus Pratama', nim: '5454545454', semester: 7, address: 'Mamuju, Indonesia', phone: '081234567940', status: 'aman' },
        { id: 54, name: 'Dicky Anggara', nim: '5555555555', semester: 6, address: 'Sumbawa, Indonesia', phone: '081234567941', status: 'kendala' },
        { id: 55, name: 'Ria Amelia', nim: '5656565656', semester: 5, address: 'Lombok, Indonesia', phone: '081234567942', status: 'tidak aman' },
        { id: 56, name: 'Aris Munandar', nim: '5757575757', semester: 4, address: 'Bangka, Indonesia', phone: '081234567943', status: 'aman' },
        { id: 57, name: 'Fadila Rahma', nim: '5858585858', semester: 3, address: 'Belitung, Indonesia', phone: '081234567944', status: 'kendala' },
        { id: 58, name: 'Gilang Suryana', nim: '5959595959', semester: 2, address: 'Tegal, Indonesia', phone: '081234567945', status: 'tidak aman' },
        { id: 59, name: 'Rizky Utami', nim: '6060606060', semester: 1, address: 'Purwokerto, Indonesia', phone: '081234567946', status: 'aman' },
        { id: 60, name: 'Vina Maharani', nim: '6161616161', semester: 8, address: 'Cilacap, Indonesia', phone: '081234567947', status: 'kendala' }
    ];

    const indexOfLastMahasiswa = currentPage * mahasiswaPerPage;
    const indexOfFirstMahasiswa = indexOfLastMahasiswa - mahasiswaPerPage;
    const currentMahasiswa = filteredMahasiswa.slice(indexOfFirstMahasiswa, indexOfLastMahasiswa);

    // Mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (mhs) => {
        setSelectedMahasiswa(mhs);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleTambahPengampu = (mhs) => {
        console.log(`Tambah Pengampu untuk mahasiswa dengan NIM: ${mhs.nim}`);
    };

    const handleHapusMahasiswa = (mhs) => {
        console.log(`Hapus Mahasiswa dengan NIM: ${mhs.nim}`);
    };

    return (
        <div>
            <div className="pgmn-container">
                <div className="data-mhs-box">
                    <Card>
                        <Card.Header>
                            <h3>Data Mahasiswa</h3>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive="sm" striped bordered hover>
                                <thead text-align=''>
                                    <tr>
                                        <th>No</th>
                                        <th>NIM</th>
                                        <th>Nama</th>
                                        <th>Semester</th>
                                        <th>Alamat</th>
                                        <th>Nomor HP</th>
                                        <th>Peringatan</th>
                                        <th>Detail</th>
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
                                        <th>
                                            <FormControl
                                                type="number"
                                                placeholder="Filter Semester"
                                                className="me-2"
                                                value={semesterFilter}
                                                onChange={(e) => setSemesterFilter(e.target.value)}
                                            />
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th>
                                            <DropdownButton title={statusFilter === 'semua' ? 'Filter Status' : statusFilter} onSelect={setStatusFilter}>
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
                                            <td>{index + 1}</td>
                                            <td className="table-cell-ellipsis">{mhs.nim}</td>
                                            <td className="table-cell-ellipsis">{mhs.name}</td>
                                            <td className="table-cell-ellipsis">{mhs.semester}</td>
                                            <td className="table-cell-ellipsis">{mhs.address}</td>
                                            <td className="table-cell-ellipsis">{mhs.phone}</td>
                                            <td>
                                                {mhs.status === 'aman' && <RiAlarmWarningFill color="green" />}
                                                {mhs.status === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                {mhs.status === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                            </td>
                                            <td>
                                                <BsFolderSymlinkFill style={{ cursor: 'pointer' }} onClick={() => openModal(mhs)} />
                                            </td>
                                            <td>
                                                <div className='d-flex'>
                                                    <Button
                                                        className='small-btn'
                                                        style={{ backgroundColor: '#DE9560', borderColor: '#DE9560' }}
                                                        onClick={() => handleTambahPengampu(mhs)}
                                                    >
                                                        Tambah Pengampu
                                                    </Button>
                                                    <Button
                                                        className='small-btn'
                                                        variant="danger"
                                                        onClick={() => handleHapusMahasiswa(mhs)}
                                                    >
                                                        Hapus Mahasiswa
                                                    </Button>
                                                </div>
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
                </div>
            </div>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Data Mahasiswa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <img
                            src={selectedMahasiswa.profilePicture}
                            alt="Profile"
                            className="modal-profile-picture"
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

export default DataMahasiswa;
