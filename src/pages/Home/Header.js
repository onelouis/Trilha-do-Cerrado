import React from "react";


function Header() {
    return ( 
        <div>
        <header className="headers">
           
                <div className="toolbar">
                    <nav>
                        <img src="/imagens/logo.png" alt="logo"/>
                            <ul>
                                <li><a>INICIO</a></li>
                                <li><a>BLOG</a></li>
                                <li><a>PARTICIPE</a></li>
                                <li><a>SOBRE</a></li>
                                <li><a>SERVIÇOS</a></li>
                            </ul>
                        <p> LOGIN</p>
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