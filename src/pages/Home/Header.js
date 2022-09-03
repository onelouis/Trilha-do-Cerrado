import React from "react";
import {Link} from 'react-router-dom'
import {ReactKeycloakProvider} from "@react-keycloak/web";
import { useKeycloak } from "@react-keycloak/web";

function Header() {
    const { keycloak, initialized } = useKeycloak();
    return ( 
        <div>
        <header className="headers">
           
                <div className="toolbar">
                    <nav>
                        <img src="/imagens/logo.png" alt="logo" id="lo"/>
                            <ul>
                                <li>
                                    <Link to="/">INICIO</Link>
                                </li>
                                <li><a>BLOG</a></li>
                                <li>
                                    <Link to="/Sobre">SOBRE</Link>
                                </li>
                                <li><a>SERVIÇOS</a></li>
                            </ul>
                            <p>{!keycloak.authenticated && (
                                <button
                                    type="button"
                                    className="text-blue-800"
                                    onClick={() => keycloak.login()}
                                >
                                    Login
                                </button>
                            )}</p>

                            
                    </nav>
                </div>
            
            <div className="Titulo texto-central">
                <p className="p">Caminhos do </p>
                <p className="p1">Planalto Central</p>
            </div>   
         </header>
           
    </div>
    );
}

export default Header;