import React from 'react';
import gpt3Logo from '../../assests/logo.png';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding" id="footer">


        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="gpt3_logo" />
                <p>Direccion de la empresa<br /> All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Redes Scoiales</p>
                <p>Contacto</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Compania</h4>
                <p>Terminos Y condiciones </p>
                <p>Politica de Privacidad</p>
                <p>Contacto</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Contactese ahora</h4>
                <p>Direccion Ancap Union</p>
                <p>085-132567</p>
                <p>ancap@gmail.com</p>
            </div>
        </div>


    </div>
);

export default Footer;