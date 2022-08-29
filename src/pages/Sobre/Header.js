import React from "react";
import {Link} from 'react-router-dom' 

function Header() {
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
                                <Link to="/Blog">BLOG</Link>
                                <li>
                                    <Link to="/Sobre">SOBRE</Link>
                                </li>
                                <li><a>SERVIÇOS</a></li>
                            </ul>
                            <p><Link to="/Login">LOGIN</Link></p>

                            
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