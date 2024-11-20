import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import ListClientesComponent from './components/ListClientesComponent'; // Asegúrate de que la ruta sea correcta
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddClienteComponent from './components/AddClienteComponent';
import ListProductoComponent from './components/ListProductoComponent';
import AddProductoComponent from './components/AddProductoComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            {/* Rutas para Clientes */}
            <Route exact path="/" element={<HomeComponent />} />
            <Route path="/clientes" element={<ListClientesComponent />} />
            <Route path="/add-cliente" element={<AddClienteComponent />} />
            <Route path="/edit-cliente/:id" element={<AddClienteComponent />} />

            {/* Rutas para Productos */}
            <Route path="/productos" element={<ListProductoComponent />} />
            <Route path="/add-producto" element={<AddProductoComponent />} />
            <Route path="/edit-producto/:id" element={<AddProductoComponent />} />
          </Routes>
        </div>  
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
