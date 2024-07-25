import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, FormControl, Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { RiAlarmWarningFill } from "react-icons/ri";
import './DataMahasiswa.css';

function DataMahasiswa() {
    const [nimFilter, setNimFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [semesterFilter, setSemesterFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('semua');
    const [filteredMahasiswa, setFilteredMahasiswa] = useState([]);

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
        { id: 3, name: 'Marul', nim: '444444444', semester: 8, address: 'Pati, Indonesia', phone: '081234567890', status: 'tidak aman' }
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h3>Data Mahasiswa</h3>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive="sm" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>NIM</th>
                                        <th>Nama</th>
                                        <th>Semester</th>
                                        <th>Alamat</th>
                                        <th>Nomor HP</th>
                                        <th>Peringatan</th>
                                        <th>Keterangan</th>
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
                                                <Dropdown.Item eventKey="aman">Aman</Dropdown.Item>
                                                <Dropdown.Item eventKey="kendala">Kendala</Dropdown.Item>
                                                <Dropdown.Item eventKey="tidak aman">Tidak Aman</Dropdown.Item>
                                            </DropdownButton>
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredMahasiswa.map((mhs, index) => (
                                        <tr key={mhs.id}>
                                            <td>{index + 1}</td>
                                            <td>{mhs.nim}</td>
                                            <td>{mhs.name}</td>
                                            <td>{mhs.semester}</td>
                                            <td>{mhs.address}</td>
                                            <td>{mhs.phone}</td>
                                            <td>
                                                {mhs.status === 'aman' && <RiAlarmWarningFill color="green" />}
                                                {mhs.status === 'kendala' && <RiAlarmWarningFill color="orange" />}
                                                {mhs.status === 'tidak aman' && <RiAlarmWarningFill color="red" />}
                                            </td>
                                            <td>...</td>
                                            <td>...</td>
                                            <td>...</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DataMahasiswa;
