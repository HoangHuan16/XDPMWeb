
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import LophocComponent from './components/Lophoc/LophocComponent';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './components/HeaderComponent';
import DiemConponent from './components/Diem/DiemConponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemLopComponent from './components/Lophoc/ThemLopComponent';
import ThemDiemComponent from './components/Diem/ThemDiemComponent';
import MonhocComponent from './components/Monhoc/MonhocComponent';
import FooterComponent from './components/Footer';
import SinhvienComponent from './components/Sinhvien/SinhvienComponent';
import BodyComponent from './components/BodyComponent';
import Header from './components/User/HeaderUserView';
import ViewDiem from './components/User/ViewDiem';


function App() {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <div className="app_container">
=======
      {/* <BrowserRouter>
        <div className='app_container'>
>>>>>>> 041f2a425ab9cdb4742643f6b970f3ae8f71bbce
          <Container>
            <HeaderComponent />

            <Routes>
              <Route path="" element={<BodyComponent />}></Route>

              <Route path="/lophoc" element={<LophocComponent />}></Route>

              <Route path="/monhoc" element={<MonhocComponent />}></Route>

              <Route path="/diem" element={<DiemConponent />}></Route>

              <Route path="/sinhvien" element={<SinhvienComponent />}></Route>
              <Route path="/test" element={<Test />} />
            </Routes>

            <FooterComponent />
          </Container>
        </div>
      </BrowserRouter> */}
       <BrowserRouter>
        <div className='app_container'>
          <Container>

            <Header />
            <Routes>
            
              <Route path='/lophoc' element={<LophocComponent />}></Route>

              <Route path='/' element={<ViewDiem />}></Route>

              <Route path='/add-diem' element={<ThemDiemComponent />}></Route>

            </Routes>

          </Container>
        </div>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
