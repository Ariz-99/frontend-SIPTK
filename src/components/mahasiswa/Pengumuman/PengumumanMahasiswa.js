import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image, Stack } from 'react-bootstrap';
import { FaRegBell } from "react-icons/fa";
import profileImgae from '../MahasiswaHome/avatar-logo.png'
import './PengumumanMahasiswa.css'

function PengumumanMahasiswa(){
    
    return (
        <div>
            <p className="pengumuman-dashboard-header"><FaRegBell size={25}/> PENGUMUMAN</p>
            <div className="pgmn-container">
                <div className="pgmn-box">
                    <div className="profile-container">
                        <div className="profile-image">
                            <Image width={64} height={64} src={profileImgae} roundedCircle />
                        </div>
                        <div>
                            <h5>Muhammad Fitra Arisaputra</h5>
                        </div>
                        <div className="mhs-tanggal">
                            <p>23-04-2024</p>
                        </div>
                    </div>
                    <div className="pgmn-content">
                        {/* Judul Pengumuman */}
                        <h3>Judul Pengumuman</h3>
                        {/* Isi Pengumuman */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nisl varius, vulputate nisi id, 
                            tempus urna. Fusce sollicitudin, metus sit amet egestas imperdiet, erat nulla viverra enim, non accumsan 
                            turpis neque quis sapien. In luctus ultrices lorem non accumsan. Vivamus viverra vitae nisi non lobortis. 
                            Donec turpis est, egestas sit amet mi et, auctor elementum dui. Morbi sit amet laoreet libero, eget bibendum dolor. 
                            Fusce mollis ultricies lectus, vitae accumsan leo faucibus in. Etiam nec lacus id elit ultrices lobortis 
                            vitae at nisi. Pellentesque bibendum sagittis ante. Proin consectetur felis a sapien euismod, a vulputate nulla 
                            finibus. Proin rutrum diam vel quam lobortis, nec ullamcorper lorem placerat. Proin ultricies, nisi non accumsan 
                            posuere, nulla lectus eleifend nisl, ut finibus dui nibh ut nulla. Aenean vitae ligula mauris. Aliquam sit 
                            amet nibh at diam ornare consectetur. Maecenas aliquet ipsum ex, ut gravida justo eleifend quis. Aenean vel 
                            lectus ex.</p>
                    </div>
                </div>
                <div className="pgmn-box">
                    <div className="profile-container">
                        <div className="profile-image">
                            <Image width={64} height={64} src={profileImgae} roundedCircle />
                        </div>
                        <div>
                            <h5>Muhammad Fitra Arisaputra</h5>
                        </div>
                        <div className="mhs-tanggal">
                            <p>23-04-2024</p>
                        </div>
                    </div>
                    <div className="pgmn-content">
                        {/* Judul Pengumuman */}
                        <h3>Judul Pengumuman</h3>
                        {/* Isi Pengumuman */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nisl varius, vulputate nisi id, 
                            tempus urna. Fusce sollicitudin, metus sit amet egestas imperdiet, erat nulla viverra enim, non accumsan 
                            turpis neque quis sapien. In luctus ultrices lorem non accumsan. Vivamus viverra vitae nisi non lobortis. 
                            Donec turpis est, egestas sit amet mi et, auctor elementum dui. Morbi sit amet laoreet libero, eget bibendum dolor. 
                            Fusce mollis ultricies lectus, vitae accumsan leo faucibus in. Etiam nec lacus id elit ultrices lobortis 
                            vitae at nisi. Pellentesque bibendum sagittis ante. Proin consectetur felis a sapien euismod, a vulputate nulla 
                            finibus. Proin rutrum diam vel quam lobortis, nec ullamcorper lorem placerat. Proin ultricies, nisi non accumsan 
                            posuere, nulla lectus eleifend nisl, ut finibus dui nibh ut nulla. Aenean vitae ligula mauris. Aliquam sit 
                            amet nibh at diam ornare consectetur. Maecenas aliquet ipsum ex, ut gravida justo eleifend quis. Aenean vel 
                            lectus ex.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PengumumanMahasiswa;