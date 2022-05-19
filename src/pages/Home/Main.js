import React from "react";


function Main() {
    return ( 
    
        <main className="main"> 
            <div className="feed">
                <div className="caixa1">
                     <h1> Area brasilia</h1>
                </div>
                <div className="caixa2">
                    <h1> Area cafuringa</h1>  
                </div>
                <div className="caixa3">
                     <h1> Area união</h1>    
                </div>
             </div>
            <div className="trilhas">
                <h> Trilhas<img src="/imagens/linha.png" alt="linha"/></h> 
            </div> 
             <div className="conteudo">
                <div className="seções">
                    <div className="Localização">
                        <img src="/imagens/vetor.png" alt="vetor"/><h1> Localização</h1>
                        <p>O arco cafuringa fica localizado na região de</p>
                    </div>
                    <div className="Dificuldade">
                         <img src="/imagens/grafico.png" alt="grafico"/><h1> Dificuldade</h1>  
                         <p>O arco cafuringa fica localizado na região de</p>
                    </div>
                    <div className="Distancia">
                         <img src="/imagens/distancia.png" alt="distancia"/><h1> Distancia</h1> 
                         <p>O arco cafuringa fica localizado na região de</p>   
                    </div>
                </div>
                <div className="mapa">
                       <h1>Mapa</h1>
                </div>
            </div>
            
        </main>
    
    );
}

export default Main;