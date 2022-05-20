import React from "react";


function header() {
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
                <b className="p">Caminhos do </b>
                <b className="p1">Planalto Central</b>
            </div>   
         </header>
           
    </div>
    );
}

export default header;