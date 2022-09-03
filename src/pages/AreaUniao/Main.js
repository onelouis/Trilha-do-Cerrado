import React from "react";
import {Link} from 'react-router-dom' 


function Main() {

    return ( 
    
        <main className="main"> 
            <div className="feed">
                <div className="caixa1">
                    
                    <h1>
                        <Link to="/AreaBrasilia">Area Brasilia</Link>
                    </h1>
                </div>
                <div className="caixa2">
                    <h1> 
                        <Link to="/">Area Cafuringa</Link>
                    </h1>  
                </div>
                <div className="caixa3">
                    <h1> <Link to="/AreaUniao">Area União</Link>    </h1>    
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
                    <iframe className="responsive-iframe " src="https://www.google.com/maps/d/embed?mid=147MG-4hX5TwVd0wgaQbb_pZL1-XTZcE&ehbc=2E312F" width="640" height="480" ></iframe>
                                
          zoom: 15,
                </div>
            </div>
            <div className="informações">
                <div className="blococinza">
                        <div className="imagem">
                            <img src="/imagens/linha3.png" alt="linha 3"/>
                        </div>
                        <div className="cinza">
                            
                            <b className="b" >Arco </b>
                            <b className="b1">União</b>

                        </div>
                        <div className="linha">
                                <img src="/imagens/linha2.png" alt="linha 2" />
                        </div>     
                </div>
                <div className="amarela">
                    <p >
                        O Arco União - Trajeto de 80km com rico valor paisagístico, cultural, místico e gastronômico.
                        É possível encontrar no percurso diversos espaços para vivência espiritual, boa alimentação e
                        contato com manifestações culturais. Aqui o público encontrará a Torre Digital: símbolo dos
                        Caminhos do Planalto Central.
                    </p>
                    <img src="/imagens/image 3.png" alt="imagem 3"/>
                    
                </div>
            </div>
        </main>
    
    );
}

export default Main;