import React from "react";
import {Link} from 'react-router-dom' 


function Main() {

    return ( 
    
        <main className="main"> 
            <div className="feed">
                <div className="parte2">
                    <div>
                        <div className="Retangulo"> </div>
                    </div>
                    
                        <div className="Cachoeira">
                            <img src="/imagens/cachoeira.png" alt="cachoeira"/>
                        </div>
                
                    
                        <div className="divisao">
                            <div className="projeto">
                                <h1> O Projeto</h1> 
                                
                                <p >Os Caminhos do Planalto Central, participam da Rede Brasileira
                                de Trilhas e integram o Caminho dos Goyazes (percurso da Cidade 
                                de Goiás à Chapada dos Veadeiros).Compreendem um conjunto aproximado
                                de 400 km de trilhas para caminhantes, ciclistas e cavaleiros, 
                                com três arcos que partem de dois pontos de relevante interesse
                                ambiental e histórico, a Floresta Nacional de Brasília e a Pedra 
                                Fundamental no Morro do Centenário. A conexão ao Caminho dos 
                                Goyazes acontece, a leste na Lagoa Feia em Formosa-GO e a oeste 
                                na Barragem do Descoberto em Águas Lindas-GO.</p>
                            </div>
                            
                        </div>
                    
                        
                </div>
            </div>



             <div className="info">
                <div className="seção">
                    <div className="Parceiros">
                        <div className="maos">
                            <img src="/imagens/apertodemao.png" alt="apertodemao"/>
                        </div>
                        <div>
                        <h1> PARCEIROS</h1>
                        <p >Para Brazlândia, ponto de início do sentido oeste/leste da trilha,
                         é possível utilizar transporte coletivo público e chegar ao pontos 
                         de início por via rodoviária, a partir da Rodoviária do Plano Piloto, 
                         no centro de Brasília.</p>
                     <p >Se a opção for fazer a trilha no sentido leste/oeste, ou seja,
                        iniciando em Formosa-GO, é necessário utilizar o transporte rodoviário 
                        que sai da Rodoviária Interestadual de Brasília. Histórico</p> 

                        <button>Ler mais</button>
                        </div>
                        
                    </div>
                </div>
                <div className="seção-2"> 
                    <div className="Regioes">
                        <div className="lup">
                             <img src="/imagens/lupa.png" alt="lupa"/>
                        </div>
                        <div>
                        <h1> REGIOES</h1>  
                        <p >Para Brazlândia, ponto de início do sentido oeste/leste da trilha,
                         é possível utilizar transporte coletivo público e chegar ao pontos 
                         de início por via rodoviária, a partir da Rodoviária do Plano Piloto, 
                         no centro de Brasília.</p>
                     <p >Se a opção for fazer a trilha no sentido leste/oeste, ou seja,
                        iniciando em Formosa-GO, é necessário utilizar o transporte rodoviário 
                        que sai da Rodoviária Interestadual de Brasília. Histórico</p> 


                        <button>ver mais </button>
                        </div>
                        
                    </div>
                </div>
                    
            </div>
        </main>
    
    );
}

export default Main;


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
                    <iframe className="responsive-iframe "src="https://www.google.com/maps/d/u/0/embed?mid=1wlBUE0O1H7Al_a_ULzB8AyeeX3uaKuc&ehbc=2E312F"></iframe>

                        
                     
                </div>
            </div>