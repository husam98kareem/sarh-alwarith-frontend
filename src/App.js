import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from "./pages/Auth"
import Header from "./components/Header"
import Footer from './components/Footer';
import Home from './pages/Home';
import Hospitality from './pages/Hospitality';
import HospitalityAdmin from './pages/HospitalityAdmin';
function App() {
  // const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/hospitality-admin" element={<HospitalityAdmin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;