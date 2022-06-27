import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre'
import AreaBrasilia from './pages/AreaBrasilia'
import AreaUniao from './pages/AreaUniao'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/Sobre" element={<Sobre/>}></Route>
                <Route path="/AreaBrasilia" element={<AreaBrasilia/>}></Route>
                <Route path="/AreaUniao" element={<AreaUniao/>}></Route>
            </Routes>         
            
        </BrowserRouter>
        
    ); 
}

export default Rotas;