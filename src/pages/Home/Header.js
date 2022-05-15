import React from "react";


function header() {
    return ( 
        <header className="headers">

            <div className="toolbar">
                <div>
                <img src="/imagens/logo.png" alt="logo" className="img"/>
                </div>
                <div className="caixacentral">
                    <button> INICIO</button>
                    <button> BLOG</button>
                    <button> PARTICIPE</button>
                    <button> SOBRE</button>
                    <button> SERVIÇOS</button>
                </div>
            </div>

        </header>
    );
}

export default header;