import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Stack, Button, Form } from 'react-bootstrap';
import { FaRegBell } from "react-icons/fa";
import './PengumumanDosen.css';

function DosenHome() {
    const [showPostForm, setShowPostForm] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const handleTogglePostForm = () => {
        setShowPostForm(!showPostForm);
    };

    const handlePostSubmit = () => {
        // Logic untuk submit post
        console.log('Title:', postTitle);
        console.log('Content:', postContent);
        // Reset form setelah submit
        setPostTitle('');
        setPostContent('');
        setShowPostForm(false);
    };

    return (
        <div>
            <p className="pengumuman-dashboard-header">
                <FaRegBell size={25} /> PENGUMUMAN
            </p>
            <Button
                variant="primary"
                className="start-post-button"
                onClick={handleTogglePostForm}
            >
                {showPostForm ? 'Cancel' : 'Start a Post'}
            </Button>
            {showPostForm && (
                <div className="post-form-container">
                    <Form>
                        <Form.Group controlId="formPostTitle">
                            <Form.Label>Judul Pengumuman</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Masukkan judul pengumuman"
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPostContent">
                            <Form.Label>Isi Pengumuman</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Masukkan isi pengumuman"
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={handlePostSubmit}
                            className="submit-button"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
            <div className="pgmn-container">
                <div className="pgmn-box">
                    <div className="profile-container">
                        <div className="profile-image">
                            <Image width={64} height={64} roundedCircle />
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
                            <Image width={64} height={64} roundedCircle />
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

export default DosenHome;
