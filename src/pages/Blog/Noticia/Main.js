import React, { useState, useEffect, useRef } from "react";
import Card from './Card/Cards'
import BlogNoticiaModal from "./Modal/Modal";
import NoticiasModal from "./Modal/LogicaModal";
import {NoticiasModalCommentsTree} from "./Modal/CommentsTree/CommentsTree";
import useApi from "../../Utils/useApi";
import UserCard from "./UserCard/UserCasrd";

function Main (){
    const [isModalVisible, setIsModalVisible, noticiaId] = useState(false);
    const commentsTree = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick2 = () => setIsActive(!isActive)

    const [load, loadInfo] = useApi ({
        url: '/comments',
        params: {
         
            _expand: 'user'
        }
    });
    const [load_news,loadnews] = useApi ({
        url: '/noticias',
        params:{
            id:1
        }
    });

    
    useEffect(() => {
        load(); load_news();
    }, []);


    function tamanhoLista(){
        const quantidadeComentarios = []

        Object.keys(loadInfo.data).forEach(el => {
            quantidadeComentarios.push(el)
        });
        
        for (let i = 0; i < quantidadeComentarios.length; i++){
            console.log(i)
        };


    }    
   

    if (!loadInfo.data){
        return <div>Carregando</div>
    }
    if (!loadnews.data){
        return <div>Carregando</div>
    }
    function dd(){
        var test = document.querySelector(".BlogComentario-texto #id5");
        console.log(test)
    }
    
    function evento(){
       if (document.querySelector("#BlogComentario-texto .id1")){
        console.log("eba")
       }else
       console.log('AAA')
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
                    <button
                        id="test"
                        className="blogBtn" 
                        onClick={ () => setIsModalVisible(true)}>
                        Novo comentário
                    </button>
                    {isModalVisible ? (<BlogNoticiaModal onClose={() => setIsModalVisible(false)}>
                                    <NoticiasModal noticiaId={noticiaId}></NoticiasModal></BlogNoticiaModal>) : null}
                                                            
                </div>
                <div className="BlogEstruturaComentarios">
                    <div className="BlogEstruturaComentarios-1">
                        {loadInfo.data.map((item) => (
                       <UserCard  avatarUrl={item.user.avatarUrl} name={item.user.name} comment={item.comment} />
                        ))} 
                        
                    </div>
                    <div className="BlogEstruturaComentarios-2">
                        <div className="BackgroundMaisNoticias-main">
                        {loadnews.data.map((item) => (
                            <div>
                            
                                <div>
                                    <img src={item.imagemUrl}>
                                    </img>
                                </div>
                                <div className="BlogMaisConteudo">
                                    <p>{item.titulo}</p>
                                    <p>{item.conteudo}</p>
                                </div>
                                
                            </div>
                        ))} 
                        </div>
                        <div className="BackgroundMaisNoticias-secundary">
                            <div className="BackgroundMaisNoticias-secundary-1">
                            </div>
                            <div className="BackgroundMaisNoticias-secundary-2">
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </body>
        
    )
    
}
export default Main; 