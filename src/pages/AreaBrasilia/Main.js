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
                <div >
                    <iframe className="responsive-iframe " src="https://www.google.com/maps/d/embed?mid=1ROmyb1-tTVoYFcBSLuZw9MtcLvl13UY&ehbc=2E312F" width="640" height="480" zoom="15"></iframe>
                        
                     
                </div>
            </div>
            <div className="informações">
                <div className="blococinza">
                        <div className="imagem">
                            <img src="/imagens/linha3.png" alt="linha 3"/>
                        </div>
                        <div className="cinza">
                            
                            <b className="b" >Arco </b>
                            <b className="b1">Brasilia</b>

                        </div>
                        <div className="linha">
                                <img src="/imagens/linha2.png" alt="linha 2" />
                        </div>     
                </div>
                <div className="amarela">
                    <p >
                        O Arco Brasília - Percurso de 85km, de viés cívico, histórico e cultural, cujo principal
                        atrativo é o Eixo Monumental de Brasília, Patrimônio Cultural da Humanidade, com seus elementos
                        arquitetônicos, culturais e paisagísticos, incluindo o centro da cidade e seu traçado urbano
                        singular, os palácios e monumentos, sobretudo de Niemeyer, as obras de arte e o paisagismo,
                        os mirantes e o belo pôr do sol, bem como os diversos espaços culturais de Brasília.
                        Além do Eixo, o Arco Brasília passa pelo Córrego do Meio, Ribeirão Sobradinho, Lago Paranoá
                        entre a Barragem, a Ermida Dom Bosco e a Ponte JK e pelo Parque Nacional de Brasília com as
                        Trilhas Cristal Água até chegar aos Caminhos da Flona.
                    </p>
                    <img src="/imagens/image 3.png" alt="imagem 3"/>
                    
                </div>
            </div>
        </main>
    
    );
}

export default Main;