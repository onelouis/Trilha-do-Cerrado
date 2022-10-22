import React from "react";
import './Card.css';

const Card = () => {
    return(
        <div className="cardFundo">        
            <div class="w-[20rem]">
                <img class="rounded-full"src='\imagens\anonimo.jpg' alt=""></img>
            </div>
            <div>
                <div class="pt-2 text-xs sm:mx-2 sm:text-xl md:p-8 text-left space-y-2">
                        <h3 className="text-black font-bold">Rafael Carvalho de Andrade</h3>
                        <p className="text-black">2 horas atrás</p>
                </div>
                <p class="pl-8 text-black">lorena comeu macarrão de montão lorena comeu macarrão de montãolorena comeu macarrão de montãolorena comeu macarrão de montão</p>
                <form>
                    <div class="pl-8 p-8">
                        <input type="Caixa de texto"className=" text-black w-full border 
                                border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo w-2/3">
                        </input>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Card
