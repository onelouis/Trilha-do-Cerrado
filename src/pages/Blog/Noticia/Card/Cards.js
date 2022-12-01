import React from "react";
import './Card.css';

const Card = ({id,imagemUrl, nome, comment}) => {
    return(
        <div id = {'id'+ id} className="cardFundo">        
            <div id = {'id'+ id}  className="Blogcomentario">
                <img src={imagemUrl}  id="imgComentarios"></img>
                
                <div className="BlogComentario-texto">
                    <span>{nome}</span>
                    <div className="BlogFundoComentario">
                        <p>{comment}</p>
                    </div>
                    
                                        
                </div>
            </div>
        </div>
    )
}
export default Card
