import React, { useState, useEffect } from 'react';
import { Form, Button, FormControl, Table, Dropdown } from 'react-bootstrap';
import { BsListUl, BsFiletypePdf } from "react-icons/bs";
import { TbMessage2Question } from "react-icons/tb";
import { IoIosSave } from "react-icons/io";
import './JadwalPerwalianMahasiswa.css'

function JadwalPerwalianMahasiswa() {   
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDosen, setSelectedDosen] = useState('');

    const scheduleData = [
        { day: 'Senin', jadwal: 'Senin, 08:00 - 10:00', prodi: 'Teknik Informatika', mata_kuliah: 'Pemrograman Web', kelas: 'A', pengampu: 'Fitra', ruangan: 'A201' },
        { day: 'Senin', jadwal: 'Senin, 10:30 - 12:00', prodi: 'Teknik Informatika', mata_kuliah: 'Rekayasa Perangkat Lunak', kelas: 'B', pengampu: 'Fitra', ruangan: 'A202' },
        { day: 'Selasa', jadwal: 'Selasa, 10:00 - 12:00', prodi: 'Sistem Informasi', mata_kuliah: 'Basis Data', kelas: 'C', pengampu: 'Ariz', ruangan: 'B102' },
        { day: 'Rabu', jadwal: 'Rabu, 08:00 - 10:00', prodi: 'Teknik Elektro', mata_kuliah: 'Sistem Embedded', kelas: 'C', pengampu: 'Marul', ruangan: 'B201' },
        // dan seterusnya untuk hari-hari lainnya
    ];

    // Array untuk nama hari dalam seminggu
    const daysOfWeek = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

    // Fungsi untuk mengelompokkan jadwal berdasarkan hari
    const groupScheduleByDay = () => {
        const groupedData = {};

        // Inisialisasi grup jadwal untuk setiap hari
        daysOfWeek.forEach(day => {
            groupedData[day] = [];
        });

        // Mengelompokkan jadwal berdasarkan hari
        scheduleData.forEach(item => {
            groupedData[item.day].push(item);
        });

        return groupedData;
    };

    // Mendapatkan data jadwal yang telah dikelompokkan berdasarkan hari
    const groupedSchedule = groupScheduleByDay();

    // State untuk menyimpan input dari form
    const [formData, setFormData] = useState({
        input1: '',
        // Tambahkan input lainnya sesuai kebutuhan
    });

    // Handler untuk mengubah data form saat nilai input berubah
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler untuk mengirim data form saat tombol submit ditekan
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data form, misalnya kirim ke backend
        console.log(formData);
        // Reset form setelah submit
        setFormData({
            input1: '',
            input2: '',
            // Reset input lainnya sesuai kebutuhan
        });
    };

    const dosenList = ['budi', 'fitra', 'anton', 'Andi', 'teguh', 'budi', 'fitra', 'anton', 'Andi', 'teguh','budi', 'fitra', 'anton', 'Andi', 'teguh','budi', 'fitra', 'anton', 'Andi', 'teguh']; // Replace with your actual list of Pengampu

    const filteredDosen = dosenList.filter(dosen =>
        dosen.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h5 className="jdwl-prwln-mhs">Jadwal Dosen</h5>
            <hr className='prwln-line' />

            <div className='jdwl-prwln-container'>
                <div className='jdwl-prwln-box'>
                    <div className="icon-text-container">
                        <BsListUl size={30} />
                        <h5>Pengisian Perwalian</h5>
                    </div>
                    <div className="additional-box1">
                        <div className='additional-box2'>
                            <div>
                                <p>Pilih Dosen</p>
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
                        </div>
                    </div>
                    <div>
                        <hr className='hr-style' /> 
                    </div>
                    <div>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Jadwal</th>
                                    <th>Prodi</th>
                                    <th>Mata Kuliah</th>
                                    <th>Kelas</th>
                                    <th>Pengampu</th>
                                    <th>Ruangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Loop untuk setiap hari */}
                                {daysOfWeek.map(day => (
                                    <React.Fragment key={day}>
                                        <tr >
                                            <td style={{ textAlign: 'left', backgroundColor: '#4E52BE', color: 'white' }} colSpan="6" className="day-header">{day}</td>
                                        </tr>
                                        {/* Loop untuk setiap jadwal pada hari tersebut */}
                                        {groupedSchedule[day].map((schedule, index) => (
                                            <tr key={index}>
                                                <td>{schedule.jadwal}</td>
                                                <td>{schedule.prodi}</td>
                                                <td>{schedule.mata_kuliah}</td>
                                                <td>{schedule.kelas}</td>
                                                <td>{schedule.pengampu}</td>
                                                <td>{schedule.ruangan}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="icon-text-container">
                        <TbMessage2Question size={30} />
                        <h5>Jadwal yang diajukan</h5>
                    </div>
                    <div className='additional-box2'>
                        <div>
                            {/* Form untuk mengisi data */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="input1" style={{ textAlign: 'left' }}>
                                    <Form.Label>Jadwal yang diajukan</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="input1"
                                        value={formData.input1}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                {/* Tambahkan Form.Group dan Form.Control lainnya sesuai kebutuhan */}
                                <div className='btn-submit'>
                                    <Button variant="primary" type="submit"><IoIosSave size={20} /> Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JadwalPerwalianMahasiswa;