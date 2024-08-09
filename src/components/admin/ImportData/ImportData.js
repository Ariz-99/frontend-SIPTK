import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ImportData.css'

function ImportData() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        console.log("File yang dipilih:", selectedFile);
       
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h3>Import Data</h3>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Add Data Mahasiswa</h4>
                                <input
                                    type="file"
                                    accept=".xls,.xlsx"
                                    onChange={handleFileChange}
                                    style={{ marginBottom: '10px' }}
                                />
                                <Button
                                    variant="primary"
                                    onClick={handleFileUpload}
                                    disabled={!selectedFile}>
                                    Upload
                                </Button>
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Add Jadwal Dosen</h4>
                                <input
                                    type="file"
                                    accept=".xls,.xlsx"
                                    onChange={handleFileChange}
                                    style={{ marginBottom: '10px' }}/>
                                <Button
                                    variant="primary"
                                    onClick={handleFileUpload}
                                    disabled={!selectedFile}>
                                    Upload
                                </Button>
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Download Template Data Mahasiswa</h4>
                                <Button
                                    variant="danger"
                                    href="../templates/Mahasiswa Database SIPTK.xlsx"
                                    download>
                                    Download
                                </Button>
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Download Template Jadwal Dosen</h4>
                                <Button
                                    variant="danger"
                                    href="../templates/Jadwal Dosen Database SIPTK.xlsx"
                                    download>
                                    Download
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ImportData;