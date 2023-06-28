import React from 'react'
import './header.css'
import people from '../../assests/people.png'
import ai from '../../assests/ai.jpg'
import ai2 from '../../assests/ai2.jpg'
const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">ANCAP: Impulsando a Uruguay con Energía Sostenible</h1>
            <p>¿Quieres estar al tanto de las últimas noticias y promociones de ANCAP? Suscríbete a nuestro boletín informativo. Solo necesitamos tu correo electrónico y recibirás actualizaciones directamente en tu bandeja de entrada. Mantente informado con ANCAP y nunca te pierdas una oportunidad</p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Tu correo electronico" />
                <button type="button">Inicia Ya</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai2} />
        </div>
    </div>
);

export default Header;