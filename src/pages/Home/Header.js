import React from "react";


function header() {
    return ( 
    <div className="glass">
        <header className="headers">
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
         </header>
    </div>
    );
}

export default header;