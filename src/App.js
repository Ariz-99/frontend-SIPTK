import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MahasiswaDashboard from './components/mahasiswa/MahasiswaDashboard';
import MahasiswaHome from './components/mahasiswa/MahasiswaHome/MahasiswaHome.js';
import ProfileMahasiswa from './components/mahasiswa/profile/ProfileMahasiswa.js';
import SurveiMahasiswa from './components/mahasiswa/survei/SurveiMahasiswa.js';
import PengumumanMahasiswa from './components/mahasiswa/Pengumuman/PengumumanMahasiswa.js';
import PerwalianMahasiswa from './components/mahasiswa/Perwalian/PerwalianMahasiswa.js';
import JadwalPerwalianMahasiswa from './components/mahasiswa/JadwalPerwalian/JadwalPerwalianMahasiswa.js'
import DosenDashboard from './components/dosen/DosenDashboard';
import DosenHome from './components/dosen/DosenHome/DosenHome.js'
import ProfileDosen from './components/dosen/Profile/ProfileDosen.js';
import PengumumanDosen from './components/dosen/Pengumuman/PengumumanDosen.js'
import PerwalianDosen from './components/dosen/Perwalian/PerwalianDosen.js'
import DetailMahasiswa from './components/dosen/Perwalian/DetailMahasiswa/DetailMahasiswa.js';
import JadwalPerwalianDosen from './components/dosen/JadwalPerwalian/JadwalPerwalianDosen.js'
import GPMDashboard from './components/gpm/GpmDashboard';
import GPMHome from './components/gpm/GPMHome/GPMHome.js';
import DetailEvaluasiMahasiswa from './components/gpm/Evaluasi/DetailEvaluasiMahasiswa/DetailEvaluasiMahasiswa.js';
import Evaluasi from './components/gpm/Evaluasi/Evaluasi.js';
import AdminDashboard from './components/admin/AdminDashboard.js';
import AdminHome from './components/admin/AdminHome/AdminHome.js';
import DataMahasiswa from './components/admin/DataMahasiswa/DataMahasiswa.js';
import DataDosen from './components/admin/DataDosen/DataDosen.js';
import DataGPM from './components/admin/DataGPM/DataGPM.js'
import ImportData from './components/admin/ImportData/ImportData.js';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/Mahasiswa" element={<MahasiswaDashboard />}>
          <Route index element={<MahasiswaHome />} />
            <Route path="profil" element={<ProfileMahasiswa />} />
            <Route path="pengumuman" element={<PengumumanMahasiswa />} />
            <Route path="perwalian" element={<PerwalianMahasiswa />} />
            <Route path="jadwal-perwalian" element={<JadwalPerwalianMahasiswa />} />
            <Route path="survei-mahasiswa" element={<SurveiMahasiswa />} />
        </Route>
        <Route path="/dosen" element={<DosenDashboard />}>
          <Route index element={<DosenHome />} />
            <Route path="profil" element={<ProfileDosen />} />
            <Route path="pengumuman" element={<PengumumanDosen />} />
            <Route path="perwalian" element={<PerwalianDosen />} />
            <Route path="jadwal-perwalian" element={<JadwalPerwalianDosen />} />
            <Route path="perwalian/detail/:mahasiswaId" element={<DetailMahasiswa />} />
          </Route>
        <Route path="/gpm" element={<GPMDashboard />}>
          <Route index element={<GPMHome />} />
            <Route path="evaluasi" element={<Evaluasi />} />
            <Route path="evaluasi/detail/:mahasiswaId" element={<DetailEvaluasiMahasiswa />} />
        </Route>
        <Route path="/admin" element={ <AdminDashboard />}>
          <Route index element={<AdminHome />} />
            <Route path="data-mahasiswa" element={<DataMahasiswa />} />
            <Route path="data-dosen" element={<DataDosen />} />
            <Route path="data-gpm" element={<DataGPM />} />
            <Route path="import-data" element={<ImportData />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;