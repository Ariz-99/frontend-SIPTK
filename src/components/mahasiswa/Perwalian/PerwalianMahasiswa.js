import React, { useState } from "react";
import { Form, Button, Table, Tab, Tabs, Modal, Dropdown, FormControl } from 'react-bootstrap';
import { BsPerson, BsFolderSymlinkFill, BsPersonCircle } from "react-icons/bs";
import './PerwalianMahasiswa.css';

function PerwalianMahasiswa() {
    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');
    const [dosenWali, setDosenWali] = useState('');
    const [DosenPembimbinng, setDosenPembimbinng] = useState('');
    const [namaOrtu, setNamaOrtu] = useState('');
    const [alamat, setAlamat] = useState('');
    const [tahunAkademik, setTahunAkademik] = useState('');
    const [tanggalPerwalian, setTanggalPerwalian] = useState('');
    const [ipk, setIpk] = useState('');
    const [jumlahSks, setJumlahSks] = useState('');
    const [nomorHp, setNomorHp] = useState('');
    const [uraian, setUraian] = useState('');
    const [masalahAkademik, setMasalahAkademik] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDosen, setSelectedDosen] = useState('');

    const handleReset = () => {
        setNama('');
        setNim('');
        setDosenWali('');
        setDosenPembimbinng('');
        setNamaOrtu('');
        setAlamat('');
        setTahunAkademik('');
        setTanggalPerwalian('');
        setIpk('');
        setJumlahSks('');
        setNomorHp('');
        setUraian('');
        setMasalahAkademik('');
    };

    const handleSubmit = () => {
        console.log("Data yang akan dikirim:", { nama, nim, dosenWali });
    };

    const Mahasiswa = [
        { id: 1, date: 'senin, 29 april 2024 ', dosen: 'dr. budi', semester: 8, nohpdosen: '08987654321', clock: '09:00-11:00', hasil: 'Approved' },
        { id: 2, date: 'jumat, 3 mei 2024 ', dosen: 'dr. fitri', semester: 8, nohpdosen: '0812345678', clock: '08:00-10:00', hasil: 'Approved' },
        { id: 3, date: 'selasa, 14 mei 2024 ', dosen: 'dr. ahmad', semester: 8, nohpdosen: '0865839274', clock: '13:00-14:00', hasil: 'Rejected' },
        { id: 4, date: 'rabu, 5 juni 2024 ', dosen: 'dr. andi', semester: 8, nohpdosen: '087596932354', clock: '08:00-09:00', hasil: 'Approved' },
        { id: 5, date: 'senin, 10 juni 2024 ', dosen: 'dr. stug', semester: 8, nohpdosen: '08128965743', clock: '10:00-11:00', hasil: 'Rejected' },
    ];

    const dummyData = {
        nama: "Muhammad Fitra A.",
        nim: "123456789",
        dosenWali: "Ariz",
        namaOrtu: "Marul",
        alamat: "Tembalang",
        tahunAkademik: "2024/2025",
        tanggalPerwalian: "29 April 2024",
        ipk: "3.5",
        jumlahSks: "40",
        nomorHp: "08123456789",
        uraian: "Awal Semester",
        masalahAkademik: "test",
        rekomendasi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nisl varius, vulputate nisi id,tempus urna. Fusce sollicitudin, metus sit amet egestas imperdiet, erat nulla viverra enim, non accumsan turpis neque quis sapien."
    };

    const handleIconClick = (data) => {
        setSelectedData(data);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedData(null);
    };

    const dosenList = ['budi', 'fitra', 'anton', 'Andi', 'teguh', 'budi', 'fitra', 'anton', 'Andi', 'teguh','budi', 'fitra', 'anton', 'Andi', 'teguh','budi', 'fitra', 'anton', 'Andi', 'teguh']; // Replace with your actual list of Pengampu

    const filteredDosen = dosenList.filter(dosen =>
        dosen.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="prwln-container">
            <div className="prwln-box">
                <Tabs
                    defaultActiveKey="pengisian-perwalian"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="pengisian-perwalian" title="Pengisian Perwalian">
                        <hr />
                        <div className="icon-text-container">
                            <BsPerson size={30} />
                            <h5>Pengisian Perwalian</h5>
                        </div>
                        <hr />
                        <Form>
                            <Form.Group controlId="formNama" style={{ textAlign: 'left' }}>
                                <Form.Label>Nama:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formNIM" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>NIM:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nim}
                                    onChange={(e) => setNim(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formDosenWali" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Dosen Wali  :</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={dosenWali}
                                    onChange={(e) => setDosenWali(e.target.value)}
                                />
                            </Form.Group>
                            <div className="d-flex">
                                <p style={{marginBottom:'0.5rem', marginTop:'0.6rem'}}>Dosen Pembimbing:</p>
                            </div>
                            <div className="modal-body-container">
                                <Dropdown className="w-100">
                                    <Dropdown.Toggle style={{backgroundColor: 'white'}} className="w-100 dropdown-custom-toggle">
                                        <span className="dropdown-text" style={{ color: 'black'}}>{selectedDosen || '-Pilih Dosen-'}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="w-100 dropdown-menu-custom">
                                        <div className="dropdown-search">
                                            <FormControl
                                                type="text"
                                                placeholder="Search..."
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                value={searchTerm}
                                            />
                                        </div>
                                        {filteredDosen.map((dosen, index) => (
                                            <Dropdown.Item
                                                key={index}
                                                onClick={() => setSelectedDosen(dosen)}
                                            >
                                                {dosen}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Form.Group controlId="formNamaOrtu" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Nama Ortu:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={namaOrtu}
                                    onChange={(e) => setNamaOrtu(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formAlamat" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Alamat:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={alamat}
                                    onChange={(e) => setAlamat(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formTahunAkademik" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Tahun Akademik:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={tahunAkademik}
                                    onChange={(e) => setTahunAkademik(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formTanggalPerwalian" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Tanggal Perwalian:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={tanggalPerwalian}
                                    onChange={(e) => setTanggalPerwalian(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formIpk" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>IPK:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={ipk}
                                    onChange={(e) => setIpk(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formJumlahSks" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Jumlah SKS:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={jumlahSks}
                                    onChange={(e) => setJumlahSks(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formNomorHp" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Nomor HP:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nomorHp}
                                    onChange={(e) => setNomorHp(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formUraian" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Uraian:</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Awal Semester"
                                        name="uraian"
                                        value="Awal Semester"
                                        checked={uraian === "Awal Semester"}
                                        onChange={(e) => setUraian(e.target.value)}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Sebelum UTS"
                                        name="uraian"
                                        value="Sebelum UTS"
                                        checked={uraian === "Sebelum UTS"}
                                        onChange={(e) => setUraian(e.target.value)}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Sebelum UAS"
                                        name="uraian"
                                        value="Sebelum UAS"
                                        checked={uraian === "Sebelum UAS"}
                                        onChange={(e) => setUraian(e.target.value)}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formMasalahAkademik" style={{ textAlign: 'left', marginTop: '10px' }}>
                                <Form.Label>Masalah Akademik:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={masalahAkademik}
                                    onChange={(e) => setMasalahAkademik(e.target.value)}
                                />
                            </Form.Group>
                            <div className="button-container">
                                <Button variant="danger" onClick={handleReset}>Reset</Button>
                                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                            </div>
                        </Form>
                    </Tab>
                    <Tab eventKey="hasil-pengajuan-jadwal" title="Hasil Pengajuan Jadwal">
                        <hr />
                        <div className="icon-text-container">
                            <BsPerson size={30} />
                            <h5>Hasil Pengajuan Jadwal</h5>
                        </div>
                        <hr />
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Tanggal</th>
                                    <th>Dosen</th>
                                    <th>Semester</th>
                                    <th>Nomor HP Dosen</th>
                                    <th>Waktu</th>
                                    <th>Keterangan</th>
                                    <th>Hasil</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Mahasiswa.map((mhs, index) => (
                                    <tr key={index}>
                                        <td>{mhs.id}</td>
                                        <td>{mhs.date}</td>
                                        <td>{mhs.dosen}</td>
                                        <td>{mhs.semester}</td>
                                        <td>{mhs.nohpdosen}</td>
                                        <td>{mhs.clock}</td>
                                        <td>{mhs.keterangan}</td>
                                        <td style={{ color: mhs.hasil === 'Approved' ? 'green' : 'red' }}>
                                            {mhs.hasil}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="hasil-perwalian" title="Hasil Perwalian">
                        <hr />
                        <div className="icon-text-container">
                            <BsPerson size={30} />
                            <h5>Hasil Pengajuan Jadwal</h5>
                        </div>
                        <hr />
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Tanggal</th>
                                    <th>Semester</th>
                                    <th>Waktu</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Mahasiswa.map((mhs, index) => (
                                    <tr key={index}>
                                        <td>{mhs.id}</td>
                                        <td>{mhs.date}</td>
                                        <td>{mhs.semester}</td>
                                        <td>{mhs.clock}</td>
                                        <td>
                                            <BsFolderSymlinkFill style={{ cursor: 'pointer' }} onClick={() => handleIconClick(dummyData)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Detail Hasil Perwalian</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedData && (
                        <div className="perwalian-modal-body-container">
                            <div className="perwalian-modal-info">
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Nama</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.nama}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">NIM</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.nim}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Dosen Wali</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.dosenWali}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Tahun Akademik</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.tahunAkademik}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Tanggal Perwalian</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.tanggalPerwalian}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">IPK</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.ipk}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Jumlah SKS</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.jumlahSks}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Nomor HP</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.nomorHp}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Uraian</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.uraian}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Masalah Akademik</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.masalahAkademik}</span>
                                </div>
                                <div className="perwalian-modal-info-row">
                                    <span className="perwalian-modal-info-label">Rekomendasi</span>
                                    <span className="perwalian-modal-info-value">: {selectedData.rekomendasi}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PerwalianMahasiswa;
