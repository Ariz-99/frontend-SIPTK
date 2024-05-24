import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { BsPerson } from "react-icons/bs";
import './SurveiMahasiswa.css'

function SurveiMahasiswa() {
    const [uraian, setUraian] = useState({
        merasaCemas: '',
        merasaBingung: '',
        menarikDiri: '',
        merasaBosan: '',
        merasaTidakPuas: '',
        merasaLelah: '',
        tidakDapatMencariJalanKeluar: '',
        tidakDapatBerkonsentrasi: '',
        merasaTidakKreatif: '',
        merasaTidakTahu: '',
        merasaTidakPercayaDiri: '',
        detakJantungBerdebar: '',
        lambungTerasaPerih: '',
        mudahKeluarKeringatDingin: '',
        kepalaPusing: '',
        susahTidur: '',
        merasaMudahMengantuk: '',
        menundaTugas: '',
        bolosKuliah: '',
        kehilanganNafsuMakan: '',
        komunikasiKurangBaik: ''
    });

    const handleReset = () => {
        setUraian({
            merasaCemas: '',
            merasaBingung: '',
            menarikDiri: '',
            merasaBosan: '',
            merasaTidakPuas: '',
            merasaLelah: '',
            tidakDapatMencariJalanKeluar: '',
            tidakDapatBerkonsentrasi: '',
            merasaTidakKreatif: '',
            merasaTidakTahu: '',
            merasaTidakPercayaDiri: '',
            detakJantungBerdebar: '',
            lambungTerasaPerih: '',
            mudahKeluarKeringatDingin: '',
            kepalaPusing: '',
            susahTidur: '',
            merasaMudahMengantuk: '',
            menundaTugas: '',
            bolosKuliah: '',
            kehilanganNafsuMakan: '',
            komunikasiKurangBaik: ''
        });
    };

    const handleSubmit = () => {
        console.log("Data yang akan dikirim:", uraian);
    };

    const handleChange = (key, value) => {
        setUraian(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    return (
        <div className="prwln-container">
            <div className="survei-box">
                <hr />
                <div className="icon-text-container">
                    <BsPerson size={30} />
                    <h5>Pengisian Survei</h5>
                </div>
                <hr />
                <Form>
                    <ol style={{ paddingLeft: '20px', textAlign: 'left' }}>
                        {[
                            { id: "merasaCemas", label: "Merasa cemas atau tegang" },
                            { id: "merasaBingung", label: "Merasa Bingung" },
                            { id: "menarikDiri", label: "Menarik diri dari lingkungan" },
                            { id: "merasaBosan", label: "Merasa bosan dengan rutinitas kuliah/belajar" },
                            { id: "merasaTidakPuas", label: "Merasa tidak puas dengan hasil kuliah" },
                            { id: "merasaLelah", label: "Merasa lelah padahal tidak melakukan kegiatan fisik" },
                            { id: "tidakDapatMencariJalanKeluar", label: "Tidak dapat mencari jalan keluar dari sebuah masalah" },
                            { id: "tidakDapatBerkonsentrasi", label: "Tidak dapat berkonsentrasi dengan baik" },
                            { id: "merasaTidakKreatif", label: "Merasa tidak kreatif dan lamban dalam belajar/mengerjakan tugas" },
                            { id: "merasaTidakTahu", label: "Merasa tidak tahu untuk apa belajar" },
                            { id: "merasaTidakPercayaDiri", label: "Merasa tidak percaya diri" },
                            { id: "detakJantungBerdebar", label: "Detak jantung berdebar tidak normal" },
                            { id: "lambungTerasaPerih", label: "Lambung terasa perih/maag" },
                            { id: "mudahKeluarKeringatDingin", label: "Mudah keluar keringat dingin" },
                            { id: "kepalaPusing", label: "Kepala terasa pusing/sakit kepala/migrain" },
                            { id: "susahTidur", label: "Susah untuk tidur/insomnia" },
                            { id: "merasaMudahMengantuk", label: "Merasa mudah mengantuk dan ingin tidur terus" },
                            { id: "menundaTugas", label: "Menunda/menghindari tugas" },
                            { id: "bolosKuliah", label: "Bolos/izin tidak masuk kuliah" },
                            { id: "kehilanganNafsuMakan", label: "Kehilangan nafsu makan" },
                            { id: "komunikasiKurangBaik", label: "Komunikasi dengan teman atau keluarga kurang baik" }
                        ].map((item, index) => (
                            <li key={index} style={{ marginBottom: '20px' }}>
                                <Form.Group controlId={`form${item.id}`}>
                                    <Form.Label className="form-label">{item.label}</Form.Label>
                                    <div className="form-check-container">
                                        <Form.Check 
                                            inline
                                            type="radio" 
                                            label="Tidak Pernah" 
                                            name={item.id}
                                            value="Tidak Pernah"
                                            checked={uraian[item.id] === "Tidak Pernah"}
                                            onChange={(e) => handleChange(item.id, e.target.value)}
                                            className="form-check-label" 
                                        />
                                        <Form.Check
                                            inline 
                                            type="radio" 
                                            label="Jarang" 
                                            name={item.id}
                                            value="Jarang"
                                            checked={uraian[item.id] === "Jarang"}
                                            onChange={(e) => handleChange(item.id, e.target.value)}
                                            className="form-check-label" 
                                        />
                                        <Form.Check
                                            inline 
                                            type="radio" 
                                            label="Kadang-kadang" 
                                            name={item.id}
                                            value="Kadang-kadang"
                                            checked={uraian[item.id] === "Kadang-kadang"}
                                            onChange={(e) => handleChange(item.id, e.target.value)}
                                            className="form-check-label" 
                                        />
                                        <Form.Check
                                            inline 
                                            type="radio" 
                                            label="Sering" 
                                            name={item.id}
                                            value="Sering"
                                            checked={uraian[item.id] === "Sering"}
                                            onChange={(e) => handleChange(item.id, e.target.value)}
                                            className="form-check-label" 
                                        />
                                    </div>
                                </Form.Group>
                            </li>
                        ))}
                    </ol>
                    <hr />
                    <div className="button-container">
                        <Button variant="danger" onClick={handleReset}>Reset</Button>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SurveiMahasiswa;
