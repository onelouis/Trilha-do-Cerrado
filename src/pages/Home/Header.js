import React from "react";


function header() {
    return ( 
        <div>
        <header className="headers">
            <div className="glass">
                <div className="toolbar">
                    <nav>
                        <img src="/imagens/logo.png" alt="logo"/>
                            <ul>
                                <li>INICIO</li>
                                <li>BLOG</li>
                                <li>PARTICIPE</li>
                                <li>SOBRE</li>
                                <li>SERVIÇOS</li>
                            </ul>
                        <p> LOGIN</p>
                    </nav>
                </div>
            </div> 
            <div className="Titulo texto-central">
                <p className="p">Caminhos do </p>
                
                <p className="p1">Planalto Central</p>
            </div>   
         </header>
           
    </div>
    );
}

export default header;