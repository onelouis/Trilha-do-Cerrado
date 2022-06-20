import React from "react";
import {GrFacebook} from 'react-icons/gr';
import {VscTwitter} from 'react-icons/vsc';
import {SiInstagram} from 'react-icons/si';



function Footer(){
    return(
        <div className="footer">
            <div className="rodape">
                <div className="icones">
                
                        <li><a><GrFacebook/></a></li>
                        <li><a><VscTwitter/></a></li>
                        <li><a><SiInstagram/></a></li>
                    
                </div>
                <div className="rede">
                    <span className="associação">Associação Rede Brasileira de Trilhas de longo Curso (Rede Trilhas)</span>
                </div>
                <div className="Copyright">
                    <span className="copy"> Copyright  © 2022</span>
                </div>
                
            </div>
        </div>
    );

}
export default Footer;