import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPerson, BsShieldLockFill } from "react-icons/bs";
import LogoUndip from './image/logo-undip-mail.png';
import './Login.css';

function Login() {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulasi respon sukses
        const response = { success: true, message: 'Login successful', token: 'fakeToken' };

        if (response.success) {
            localStorage.setItem('userToken', response.token);
            localStorage.setItem('userRole', role);
            alert(response.message);

            if (role === 'mahasiswa') {
                // Simulasi mendapatkan data info mahasiswa
                const infoResponse = { semester: 3 }; // Simulasi data semester

                if (infoResponse) {
                    const semester = infoResponse.semester;
                    localStorage.setItem('userSemester', semester);

                    if ([1, 3, 7].includes(semester)) {
                        navigate('/mahasiswa/survei-mahasiswa');
                    } else {
                        navigate('/mahasiswa');
                    }
                } else {
                    alert('Failed to get data Semester');
                }
            } else {
                switch (role) {
                    case 'admin':
                        navigate('/admin');
                        break;
                    case 'dosen':
                        navigate('/dosen');
                        break;
                    case 'gpm':
                        navigate('/gpm');
                        break;
                    default:
                        navigate('/');
                        alert('Invalid role');
                }
            }
        } else {
            alert(response.message);
        }
    };

    const handleRoleChange = (newRole) => {
        setRole(newRole);
    };

    const getPlaceholder = () => {
        switch (role) {
            case 'admin':
                return 'Enter Username';
            case 'dosen':
                return 'Enter NIP';
            case 'mahasiswa':
                return 'Enter NIM';
            case 'gpm':
                return 'Enter Email';
            default:
                return 'Enter Username';
        }
    };

    return (
        <div className="login-container">
            <div className="login-image"></div>
            <div className="login-form-container">
                <img src={LogoUndip} alt="Logo Undip" className="logo-undip" />
                <h3>Sistem Informasi Perwalian Teknik Komputer (SIPTK)</h3>
                <p>Universitas Diponegoro</p>
                <hr className="divider" />
                <form onSubmit={handleLogin} className="login-form">
                    <div className="button-group">
                        <button
                            type="button"
                            className={`role-button ${role === 'mahasiswa' ? 'active' : ''}`}
                            onClick={() => handleRoleChange('mahasiswa')}
                        >
                            Mahasiswa
                        </button>
                        <button
                            type="button"
                            className={`role-button ${role === 'dosen' ? 'active' : ''}`}
                            onClick={() => handleRoleChange('dosen')}
                        >
                            Dosen
                        </button>
                        <button
                            type="button"
                            className={`role-button ${role === 'gpm' ? 'active' : ''}`}
                            onClick={() => handleRoleChange('gpm')}
                        >
                            GPM
                        </button>
                        <button
                            type="button"
                            className={`role-button ${role === 'admin' ? 'active' : ''}`}
                            onClick={() => handleRoleChange('admin')}
                        >
                            Admin
                        </button>
                    </div>
                    <div className="input-group">
                        <div className="input-icon">
                            <BsPerson size={25}/>
                        </div>
                        <input
                            type="text"
                            placeholder={getPlaceholder()}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <div className="input-icon">
                            <BsShieldLockFill size={25}/>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
