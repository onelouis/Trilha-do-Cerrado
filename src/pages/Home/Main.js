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
                    <p >Com seus 150km, este arco se destaca no aspecto ambiental e 
                        na cultura rural, religiosa e histórica da ocupação do nosso 
                        território. Percorre ampla região com diversos atrativos naturais e os atributos 
                        do Cerrado apresentam-se bem preservados. De topografia variada proporciona belas 
                        paisagens e da mesma forma, conecta várias Unidades de Conservação.</p>
                    <img src="/imagens/image 3.png" alt="imagem 3"/>
                    
                </div>
            </div>
        </main>
    
    );
}

export default Main;