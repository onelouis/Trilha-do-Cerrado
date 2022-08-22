import React from "react";
import {Link} from 'react-router-dom'


function cabeca() {
    return ( 
        <div>
        <header className="cabecario">
           
                <div className="toolbar">
                    <nav>
                        <img src="/imagens/logo.png" alt="logo"/>
                            <ul>
                                <li>
                                    <Link to="/">INICIO</Link>
                                </li>
                                <li> 
                                    <Link to="/Blog">BLOG</Link>
                                </li>
                                <li>
                                    <Link to="/Sobre">SOBRE</Link>
                                </li>
                                <li>SERVIÇOS</li>
                            </ul>
                        <p><Link to="/Login">LOGIN</Link></p>
                    </nav>
                </div>
            
            <div className="Titulo texto-central">
                <img src="/imagens/logo.png" alt="logo" id="logoLog"/>
                <p className="pLogin">Login</p>
                <b className="p1Login">caminhos do planalto central</b>
            </div>   
         </header>
           
    </div>
    );
}

export default cabeca;