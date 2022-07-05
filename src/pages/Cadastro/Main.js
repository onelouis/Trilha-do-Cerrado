import React from "react";

function Main(){

    
    return(
        <body>
            <div>

                <div className="conjunto">
                    <div className="bloco"></div>
                </div>

                
                <img src="/imagens/logo2.png" alt="logo" id="logoImg"/>

                <div className="titulo">
                    Cadastro
                </div>

                <div className="form">

                    <form action="">
                        <div class="inputBox">
                            <input type='text' name="nome" id="nome" class="inputUser" required></input>
                            <label for="nome" class="labelInput">Nome completo</label>
                        </div>

                        <br></br>

                        <div class="inputBox">
                            <input type='text' name='email' id='email' class="inputUser" required></input>
                            <label for="nome" class="labelInput">Email</label>
                        </div>

                        <br></br>

                        <div class="inputBox">
                            <input type='senha' name='senha' id='senha' class="inputUser" required></input>
                            <label for="nome" class="labelInput">Senha</label>
                        </div>

                        <br></br>

                        <input type="submit" name="ler mais" id="ler mais"></input>

                        
                    </form>
                </div>

                <div className="bloco2"></div>
        
            </div>
        </body>
 )
}

export default Main;