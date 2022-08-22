import React from "react";

function Main(){
    return(
        <body className="body">
            <div>

                <div className="Principal">
                    <div className="fundo"></div>
                    <div className="noticia">

                        <div className="noticiaP">
                            <div className="np1">
                                <p id="tit">Principais</p>
                                <p id="tita">posts</p>
                                <img src="/imagens/news2.png" id='news2'></img>
                                <strong><p id="text2">A importancancia da preservação</p></strong>
                                <p id="text3">A importancancia da preservação. Nos dias
                                atuais vem se tornando cada vez mais importante a </p>
                            </div>

                            <div className="np2">
                            <img src="/imagens/image 7.png" id="news3"></img>
                            </div>

                            <div className="np3">
                            <img src="/imagens/news2.png" id='news4'></img>
                            <strong><p id="text4">A importancancia da preservação</p></strong>
                            <p id="text5">A importancancia da preservação. Nos dias
                            atuais vem se tornando cada vez mais importante a </p>
                            </div>

                        </div>

                        <div className="noticiaG">
                            <img src="/imagens/noticia.png" id="news"></img>
                            <p id="text">Porque não pode entrar no parque nacional </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="barra">
                <div className="eventos">
                    <img src="/imagens/Vector.png" id="vector"></img>
                    <p id="txtbarra">Eventos</p>
                </div>

                <div className="artigos">
                    <img src="/imagens/Vector2.png" id="vector2"></img>
                    <p id="txtbarra">Artigos</p>
                </div>

                <div className="noticias">
                <img src="/imagens/Vector3.png" id="vector3"></img>
                    <p id="txtbarra">Noticias</p>
                </div>

            </div>

            <div className="txt">
                <p id="txtPost">Posts</p>
                <p id="txtViral">Virais</p>
            </div>

            <div className="principal2">
              

                <div className="sub">
                        <div className="maior">
                            <div className="blocoAmarelo"></div>
                            <img src="/imagens/queimada.png" id="queimadas"></img>
                            <p id="perigo"><b>O perigo das queimadas</b></p>
                            <p id="perigoSub">O parque não pode ser acessado pois, 
                            é uma area de preservação onde se concontra diversicada, 
                            fauna e flora O parque não pode ser acessado pois, 
                            é uma area de preservação onde se concontra diversicada, 
                            fauna e floraO parque não pode ser acessado pois, é </p>
                            <button type="button" class="efeito efeito-3">Materia completa</button>



                        </div>
                        
                        <div className="menorS">
                            <div className="blocoAmarelo2"></div>
                            <img src="/imagens/explorar.png" id="explorar"></img>
                            <p id="txtExpe">Expedição dia 18</p>
                            <p id="txtExpe2">O parque não pode ser acessado pois, 
                            é uma area de preservação onde se concontra diversicada, 
                            fauna e flora O parque não pode ser acessado pois,
                             é uma area de preservação onde se concontra diversicada,
                             fauna e floraO parque não pode ser acessado pois, é </p>
                            <button type="button" class="efeito2 efeito-3">Materia completa</button>

                        </div>

                        <div className="menorI">
                            <div className="blocoAmarelo3"></div>
                            <img src="/imagens/noticia.png" id="noti"></img>
                            <p id="txtExpe">Parque nacional de Brasília </p>
                            <p id="txtExpe2">O parque não pode ser acessado pois, 
                            é uma area de preservação onde se concontra diversicada, 
                            fauna e flora O parque não pode ser acessado pois,
                             é uma area de preservação onde se concontra diversicada,
                             fauna e floraO parque não pode ser acessado pois, é </p>
                            <button type="button" class="efeito2 efeito-3">Materia completa</button>

                        </div>
                </div>
                
            </div>
    </body>

    )
}

export default Main;