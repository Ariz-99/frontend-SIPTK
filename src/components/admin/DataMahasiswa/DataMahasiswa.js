import React, {useState, useEffect}from 'react';
import { Container, Row, Col, Card, Button, Form, FormControl, Table } from 'react-bootstrap';
import { BsPersonFillAdd } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";
import './DataMahasiswa.css';

function DataMahasiswa() {
    // const [mahasiswa, setMahasiswa] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMahasiswa, setFilteredMahasiswa] = useState([]);

    useEffect(() => {
        const results = Mahasiswa.filter(Mahasiswa =>
            Mahasiswa.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMahasiswa(results);
        // const fetchMahasiswa = async () => {
        //     setLoading(true);
        //     setError(null);
        //     try {
        //         const response = await fetch('/api/mahasiswa');  // Sesuaikan dengan URL API yang sebenarnya
        //         if (!response.ok) throw new Error('Something went wrong');
        //         const data = await response.json();
        //         setMahasiswa(data);
        //     } catch (err) {
        //         setError(err.message || 'Unexpected Error!');
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchMahasiswa();
    }, [searchTerm]);

    // if (loading) return <p>Loading data...</p>;
    // if (error) return <p>Error: {error}</p>

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
                            <div className="d-flex justify-content-between mb-3">
                                <Form className="d-flex ms-auto">
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
                                    {filteredMahasiswa.map((mhs, index) => (
                                        <tr key={mhs.id}>
                                            <td>{index + 1}</td>
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
