import React from 'react';
import Feature from '../../components/feature/feature';
import './features.css';
import servicios from '../../assests/servicios.jpg'

const featuresData = [
    {
        title: 'Cambio de Aceites ',
        text: ' En nuestras estaciones de servicio, contamos con expertos en cambio de aceites que te brindarán un servicio rápido y confiable para mantener tu motor en óptimas condiciones.',
    },
    {
        title: 'Lavado de Autos',
        text: 'Deja tu vehículo en manos de nuestro equipo especializado en lavado de autos. Utilizamos productos de alta calidad y técnicas profesionales para dejar tu automóvil limpio, reluciente y protegido.',
    },
    {
        title: 'Minimercado',
        text: 'En nuestras instalaciones, encontrarás un práctico minimercado que ofrece una amplia gama de productos. Desde snacks y bebidas hasta artículos de conveniencia, ¡tenemos todo lo que necesitas durante tu parada en nuestra estación de servicio!',
    },
    {
        title: 'Productos de Calidad para tu Vehículo',
        text: 'Además de nuestros servicios, en nuestras estaciones de servicio encontrarás una selección de productos para el cuidado y mantenimiento de tu vehículo. Desde lubricantes de alta calidad hasta aditivos y accesorios, te ofrecemos todo lo que necesitas para mantener tu automóvil en excelente estado.',
    },
];

const Features = () => (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">ANCAP: Tu Destino de Energía y Más-Descubre Nuestra Amplia Variedad de Servicios y Productos.</h1>
            <img src={servicios} alt="Imagen de servicios" />
        </div>
        <div className="gpt3__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Features;