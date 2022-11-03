import React, {useState, useEffect, useRef} from "react";
import { useParams } from "react-router";
import Card from './Card/Cards'
import BlogNoticiaModal from "./Modal/Modal";
import NoticiasModal from "./Modal/LogicaModal";
//import UserCard from "./UserCard/userCard";
import CommentNews from "./CommentNews/CommentNews";
import useApi from "../../Utils/useApi";

function Main (){
    const [isModalVisible, setIsModalVisible, noticiaId] = useState(false);
    const commentsTree = useRef(null)
    const onClick2 = () => setIsActive(!isActive)
    const [isActive, setIsActive] = useState(false)
    const params = useParams();
    
    
    const [load, loadInfo] = useApi ({
        url: '/comments',
        params: {
            _expand: 'user'
        }
    });
    const [load_news,loadnews] = useApi ({
        url: '/noticias',
        params:{
        }
    });


    
    useEffect(() => {
        load(); load_news();
    }, []);

//    function carregaBlogMaisNoticias(val){
//        {loadnews.data
//            .filter(function(carrega){ 
//                return carrega.id === val;   
//            }) 
//            .map((item) => 
//                (
 //                   <CommentNews
 //                       imagemUrl = {item.imagemUrl}
 //                       titulo = {item.titulo}
  //                      conteudo = {item.conteudo}
  //                  ></CommentNews>
  //              )
   //             )
   //     }
   // }
   

    if (!loadInfo.data){
        return <div>Carregando</div>
    }
    if (!loadnews.data){
        return <div>Carregando</div>
    }
   
   

    return(
        <body className="blogPagina">
            {loadnews.data
                    .filter(function(carrega){ 
                        return carrega.id ===  parseInt(params.id);   
                    }) 
                    .map((item) => 
                    (
                        <div>
                            <div className="topo">
                            <div className="text">
                                    <div className="amarelo"></div>
                                    <p id="palavras1">{item.titulo}</p>
                                </div>             
                            
                                <div className="foto">
                                    <div className="conteiner-hidden"></div>
                                        <div className="conteiner-foto">
                                        <img src={item.imagemUrl} id="info"></img>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="blogBloco">
                                <div className="corpo">
                                    <div className="corpoImagens">
                                        <img src="/imagens/mapa.png"></img>
                                        <img src="/imagens/arvore.png"></img>
                                        <img src="/imagens/bike.png"></img>
                                        <img src="/imagens/bulssola.png"></img>
                                        <img src="/imagens/spot.png"></img>
                                        <img src="/imagens/lupa.png"></img>
                                    </div>
                                    <div className="fundoText">
                                        <p>{item.conteudo}</p>
                                    </div>
                                    <div className="corpoImagens2">
                                        <img src="/imagens/mapa.png"></img>
                                        <img src="/imagens/arvore.png"></img>
                                        <img src="/imagens/bike.png"></img>
                                        <img src="/imagens/bulssola.png"></img>
                                        <img src="/imagens/spot.png"></img>
                                        <img src="/imagens/lupa.png"></img>
                                    </div>         
                                </div>
                
                                <div className="comentariosAuxiliares">
                                    <div className="amarelo2"></div>
                                        {loadInfo.data
                                                    .filter(function(carrega){ 
                                                        return carrega.id <= 3;   
                                                    }) 
                                                    .map((item) => 
                                                        (
                                                            <Card
                                                                id = {item.id}
                                                                imagemUrl = {item.user.avatarUrl}
                                                                nome = {item.user.name}
                                                                comment = {item.comment}
                                                            ></Card>
                                                        )
                                                        )
                                                    }
                                </div>
                            </div>
                        </div>
   
                    )
                    )
            }
          
           

            <div className="corpo2">
            <div className="comentariosAuxiliares-2">
                <div className="amarelo3"></div>
                    {loadInfo.data
                                .filter(function(carrega){ 
                                    return carrega.id <= 3 ;   
                                }) 
                                .map((item) => 
                                    (
                                        <Card
                                            imagemUrl = {item.user.avatarUrl}
                                            nome = {item.user.name}
                                            comment = {item.comment}
                                        ></Card>
                                    )
                                    )
                                }

                </div>      
                <div className="blogFundoDoTexto">
                    <div className="fundoText2">
                        <p>
                        O ato de sinalizar um caminho, indicando a direção correta a seguir, é tão antigo quanto a própria história da humanidade. Índios nas Américas, peregrinos cristãos na Europa Medieval e bandeirantes no Brasil já se utilizavam de marcações feitas em pedras e árvores para alcançarem seus destinos.
                        As recentes ações de sinalização das trilhas brasileiras vão justamente ao encontro de um movimento de sucesso que ecoa mundo afora, onde essas trilhas são usadas como poderosos aparelhos de recreação e educação ambiental, além de uma ótima ferramenta para a conservação do meio ambiente e uma alternativa para gerar de emprego e renda por onde elas passam.
                        </p>
                    </div>
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
                            <div>
                                <div className="Blogcomentario">
                                    <img src={item.user.avatarUrl}  id="imgComentarios"></img>
                                    
                                    <div className="BlogComentario-texto"> 
                                        <span>{item.user.name}</span>
                                        <div className="BlogFundoComentario">
                                            <p>{item.comment}</p>
                                        </div>
                                        <textarea 
                                            type='text'  
                                            placeholder='comentar' 
                                            className="BlogCaixa-Comentario">
                                        </textarea>
                                        <button 
                                            className="BlogComentario-botao">
                                            Comentar
                                        </button> 
                                        <button
                                            className="blogBtnArvoreComentarios"
                                            onClick={onClick2}>
                                        comentarios</button>
                                        
                                    </div>
                                </div>
                                <div className={`tree ${isActive ? "active" : "inactive" }`} ref={commentsTree}></div>
         
                            </div>
                            
                        ))} 
                        
                    </div>
                    <div className="BlogEstruturaComentarios-2">
                        <div className="BackgroundMaisNoticias-main">
                        {loadnews.data
                            .filter(function(carrega){ 
                                return carrega.id === 3;   
                            }) 
                            .map((item) => 
                                (
                                    <a href="/Blog/noticia/3" className="link">
                                    <CommentNews
                                        imagemUrl = {item.imagemUrl}
                                        titulo = {item.titulo}
                                        conteudo = {item.conteudo}
                                    ></CommentNews>
                                    </a>
                                )
                                )
                            }
                        
                        </div>
                        <div className="BackgroundMaisNoticias-secundary">
                            <div className="BackgroundMaisNoticias-secundary-1">
                            {loadnews.data
                            .filter(function(carrega){ 
                                return carrega.id === 1;   
                            }) 
                            .map((item) => 
                                (   
                                    <a href="/Blog/noticia/1" className="link">
                                    <CommentNews
                                        imagemUrl = {item.imagemUrl}
                                        titulo = {item.titulo}
                                        conteudo = {item.conteudo}
                                    ></CommentNews>
                                    </a>
                                )
                                )
                            }
                            </div>
                            <div className="BackgroundMaisNoticias-secundary-2">
                            {loadnews.data
                            .filter(function(carrega){ 
                                return carrega.id === 2;   
                            }) 
                            .map((item) => 
                                (
                                    <a href="/Blog/noticia/2" className="link">
                                    <CommentNews
                                        imagemUrl = {item.imagemUrl}
                                        titulo = {item.titulo}
                                        conteudo = {item.conteudo}
                                    ></CommentNews>
                                    </a>
                                )
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </body>
        
    )
    
}
export default Main; 