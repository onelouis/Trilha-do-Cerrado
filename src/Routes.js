import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom'


import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./Keycloak"
import Nav from "./components/Nav";

import PrivateRoute from './helpers/PrivateRoute'
import SecuredPage from './pages/Securedpage'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre'
import AreaBrasilia from './pages/AreaBrasilia'
import AreaUniao from './pages/AreaUniao'

const Rotas = () => {
    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Cadastro" element={<Cadastro/>}/>
                        <Route path="/Sobre" element={<Sobre/>}></Route>
                        <Route path="/AreaBrasilia" element={<AreaBrasilia/>}></Route>
                        <Route path="/AreaUniao" element={<AreaUniao/>}></Route>
                        <Route
                            path="/secured"
                            element={
                                <PrivateRoute>
                                    <SecuredPage />
                                </PrivateRoute>
                            }
                        />

                    </Routes>

                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>

    );
}

export default Rotas;