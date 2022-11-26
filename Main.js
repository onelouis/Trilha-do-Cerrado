import React, { useState, useEffect } from "react";
import Card from './Card/Cards'
import BlogNoticiaModal from "./Modal/Modal";
import NoticiasModal from "./Modal/LogicaModal";
import useApi from "../../Utils/useApi";

function Main(){
    const [isModalVisible, setIsModalVisible, noticiaId] = useState(false);
    const [load, loadInfo] = useApi ({
        url: '/noticias',
        params: {
            Id: '1'
        }
    });

    useEffect(() => {
        load();
    }, []);

    if (!loadInfo.data){
        return <div>Carregando</div>
    }
    return(
        <body>

            <div className="topo">
                
                <div className="text">
                    <div className="amarelo"></div>
                    <p id="palavras1">Porque não <br></br>pode entrar no <br></br>parque nacional </p>
                    
                </div>

                <div className="foto">
                    <img src="/imagens/noticia.png" id="info"></img>
                </div>

            </div>
            <div className="blogBloco">
                <div className="amarelo2"></div>
                <div className="corpo">
                    <div className="fundoText">
                        <p>
                        O ato de sinalizar um caminho, indicando a direção correta a seguir, é tão antigo quanto a própria história da humanidade. Índios nas Américas, peregrinos cristãos na Europa Medieval e bandeirantes no Brasil já se utilizavam de marcações feitas em pedras e árvores para alcançarem seus destinos.
                        As recentes ações de sinalização das trilhas brasileiras vão justamente ao encontro de um movimento de sucesso que ecoa mundo afora, onde essas trilhas são usadas como poderosos aparelhos de recreação e educação ambiental, além de uma ótima ferramenta para a conservação do meio ambiente e uma alternativa para gerar de emprego e renda por onde elas passam.
                        </p>
                    </div>         
                </div>
                
                <Card/>
            </div>

            <div className="corpo2">
                <div className="amarelo3"></div>
                <div className="fundoText2">
                    <p>
                    O ato de sinalizar um caminho, indicando a direção correta a seguir, é tão antigo quanto a própria história da humanidade. Índios nas Américas, peregrinos cristãos na Europa Medieval e bandeirantes no Brasil já se utilizavam de marcações feitas em pedras e árvores para alcançarem seus destinos.
                    As recentes ações de sinalização das trilhas brasileiras vão justamente ao encontro de um movimento de sucesso que ecoa mundo afora, onde essas trilhas são usadas como poderosos aparelhos de recreação e educação ambiental, além de uma ótima ferramenta para a conservação do meio ambiente e uma alternativa para gerar de emprego e renda por onde elas passam.
                    </p>
                </div>         
            </div>

            <div className="Blogcomentarios">
                
                <div className="Bl">
                    <button className="blogBtn" 
                    
                        onClick={ () => setIsModalVisible(true)}>Novo comentário</button>
                            {isModalVisible ? (<BlogNoticiaModal onClose={() => setIsModalVisible(false)}>
                            <NoticiasModal noticiaId={noticiaId}></NoticiasModal></BlogNoticiaModal>) : null}
                         

                                                
                </div>
               
                <div className="Blogcomentario">
                    <img src="\imagens\anonimo.jpg" id="imgComentarios"></img>
                        <div className="BlogComentario-texto">
                            {loadInfo.data.map((item) =>(
                                <p>{item.titulo}</p>
                            ))}
                            <button className="BlogComentario-botao">comentar</button>
                        </div>
                </div>

                <div className="Blogcomentario">
                    <img src="\imagens\anonimo.jpg"></img>
                </div>
            </div>

        </body>
        
    )
}
export default Main; 