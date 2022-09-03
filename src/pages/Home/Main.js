import React from "react";
import {Link} from 'react-router-dom' 


function Main() {

    return ( 
    
        <main className="main"> 
            <div className="feed">
                <div className="caixa1">
                    
                    <h1>
                        <a><Link to="/AreaBrasilia">Area Brasilia</Link></a>
                    </h1>
                </div>
                <div className="caixa2">
                    <h1> 
                        <a><Link to="/">Area Cafuringa</Link></a>
                    </h1>  
                </div>
                <div className="caixa3">
                    <h1> <a><Link to="/AreaUniao">Area União</Link>  </a>  </h1>    
                </div>
            </div>
            <div className="trilhas">
                <b> Trilhas<img src="/imagens/linha.png" alt="linha"/></b> 
            </div> 
             <div className="conteudo">
                <div className="seções">
                    <div className="Localização">
                        <img src="/imagens/vetor.png" alt="vetor"/><h1> Localização</h1>
                        <p></p>
                    </div>
                    <div className="Dificuldade">
                         <img src="/imagens/grafico.png" alt="grafico"/><h1> Dificuldade</h1>  
                         <p></p>
                    </div>
                    <div className="Distancia">
                         <img src="/imagens/distancia.png" alt="distancia"/><h1> Distancia</h1> 
                         <p></p>
                    </div>
                </div>
                <div >
                    <iframe className="responsive-iframe "src="https://www.google.com/maps/d/u/0/embed?mid=1wlBUE0O1H7Al_a_ULzB8AyeeX3uaKuc&ehbc=2E312F"></iframe>

                        
                     
                </div>
            </div>
            <div className="informações">
                <div className="blococinza">
                        <div className="imagem">
                            <img src="/imagens/linha3.png" alt="linha 3"/>
                        </div>
                        <div className="cinza">
                            
                            <b className="b" >Arco </b>
                            <b className="b1">Cafuringa</b>

                        </div>
                        <div className="linha">
                                <img src="/imagens/linha2.png" alt="linha 2" />
                        </div>     
                </div>
                <div className="amarela">
                    <p >O Arco Cafuringa - Trilha de 146km, que destaca o aspecto ambiental, a cultura rural, religiosa e histórica.
                        Percorre ampla região com diversos atrativos naturais e os atributos do Cerrado bem preservados,
                        topografia variada, belas paisagens e conectando várias Unidades de Conservação da região.</p>
                    <img src="/imagens/image 3.png" alt="imagem 3"/>
                    
                </div>
            </div>
        </main>
    
    );
}

export default Main;