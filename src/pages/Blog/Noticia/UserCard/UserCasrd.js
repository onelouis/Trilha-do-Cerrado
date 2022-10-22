import { useState } from "react"

const UserCard = (avatarUrl, name, comment) => {
    const [commentsOpen, setCommentsOpen] = useState(false)

    return(
        <div className="Blogcomentario">
            <img src={avatarUrl}  id="imgComentarios"></img>
            
            <div className="BlogComentario-texto"> 
                <span>{name}</span>
                <div className="BlogFundoComentario">
                    <p>{comment}</p>
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
                  //  onClick={onClick2}>
                >comentarios</button>
               
            </div>
        </div>
                
               
    )
}

export default UserCard