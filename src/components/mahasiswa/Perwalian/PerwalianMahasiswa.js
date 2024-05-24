import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { BsPerson } from "react-icons/bs";
import './PerwalianMahasiswa.css'

function PerwalianMahasiswa(){
    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');
    const [dosenWali, setDosenWali] = useState('');
    const [namaOrtu, setNamaOrtu] = useState('');
    const [alamat, setAlamat] = useState('');
    const [tahunAkademik, setTahunAkademik] = useState('');
    const [tanggalPerwalian, setTanggalPerwalian] = useState('');
    const [ipk, setIpk] = useState('');
    const [jumlahSks, setJumlahSks] = useState('');
    const [nomorHp, setNomorHp] = useState('');
    const [uraian, setUraian] = useState('');
    const [masalahAkademik, setMasalahAkademik] = useState('');

    const handleReset = () => {
        setNama('');
        setNim('');
        setDosenWali('');
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
        // Lakukan logika untuk mengirim data form ke backend atau melakukan tindakan lainnya
        console.log("Data yang akan dikirim:", { nama, nim, dosenWali });
        // Tambahkan logika lain sesuai kebutuhan
    };


    return (
        <div className="prwln-container">
            <div className="prwln-box">
                <hr />
                <div className="icon-text-container">
                    <BsPerson size={30} />
                    <h5>Pengisian Perwalian</h5>
                </div>
                <hr />
                <Form>
                    <Form.Group controlId="formNama" style={{textAlign: 'left'}}>
                        <Form.Label>Nama:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nama} 
                            onChange={(e) => setNama(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formNIM" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>NIM:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nim} 
                            onChange={(e) => setNim(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formDosenWali" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Dosen Wali:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={dosenWali} 
                            onChange={(e) => setDosenWali(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formNamaOrtu" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Nama Ortu:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={namaOrtu} 
                            onChange={(e) => setNamaOrtu(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formAlamat" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Alamat:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={alamat} 
                            onChange={(e) => setAlamat(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formTahunAkademik" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Tahun Akademik:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={tahunAkademik} 
                            onChange={(e) => setTahunAkademik(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formTanggalPerwalian" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Tanggal Perwalian:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={tanggalPerwalian} 
                            onChange={(e) => setTanggalPerwalian(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formIpk" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>IPK:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={ipk} 
                            onChange={(e) => setIpk(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formJumlahSks" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Jumlah SKS:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={jumlahSks} 
                            onChange={(e) => setJumlahSks(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formNomorHp" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Nomor HP:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nomorHp} 
                            onChange={(e) => setNomorHp(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formUraian" style={{textAlign: 'left', marginTop: '10px'}}>
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
                    <Form.Group controlId="formMasalahAkademik" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Masalah Akademik:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={masalahAkademik} 
                            onChange={(e) => setMasalahAkademik(e.target.value)} 
                        />
                    </Form.Group>
                    {/* Tombol Reset dan Submit */}
                    <div className="button-container">
                        <Button variant="danger" onClick={handleReset}>Reset</Button>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default PerwalianMahasiswa;