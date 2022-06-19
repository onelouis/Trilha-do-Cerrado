import React from "react";

function Main(){

    return(
        <body>
            <div>

                <div className="conjunto">
                    <div className="bloco"></div>
                </div>

                
                <div className="logoImg">
                    <img src="/imagens/logo2.png" alt="logo"/>
                </div>

                <div className="tituloLogin">
                    Login
                </div>

                <div className="formLogin">

                    <form action="">
                        
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

                        <input type="submit" name="submit" id="submit"></input>

                        
                        <a id="link" href="/Cadastro">Não possui casastro? Casatre-se</a>
                        

                
                    </form>
                </div>

                <div className="bloco2Login"></div>
        
            </div>
        </body>
 )
}

export default Main;