import './App.css';
import Layout from './Components/Layout';
import Autorizacion from './Components/Autorizacion';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Layout />} />
        <Route path='/' element={<Autorizacion/>}></Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
