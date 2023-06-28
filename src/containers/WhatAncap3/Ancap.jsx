import React from 'react';
import Feature from '../../components/feature/feature';
import './ancap.css';

const Ancap = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="Quienes Somos?" text="Somos ANCAP, el motor energético de Uruguay. Proveemos combustibles de calidad superior y una amplia gama de servicios a través de nuestras estaciones. Nos comprometemos con la excelencia y la sostenibilidad, impulsando el progreso de nuestro querido Uruguay. Somos ANCAP: Energía que Impulsa Uruguay." />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">Donde las posibilidades van más allá de tu imaginación</h1>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Misión" text="Nuestra misión en ANCAP es proporcionar energía de alta calidad y servicios confiables a toda Uruguay, promoviendo la sostenibilidad y contribuyendo al crecimiento económico del país. Somos ANCAP: Energía que Impulsa Uruguay." />
            <Feature title="Visión" text="Nuestra visión es ser líderes en la provisión de energía y servicios de calidad, promoviendo el crecimiento sostenible y la prosperidad de Uruguay. Aspiramos a ser reconocidos por nuestra contribución al desarrollo económico, la innovación y nuestro compromiso con el medio ambiente. ANCAP: Energía que Impulsa Uruguay." />
            <Feature title="Valores" text="Nos regimos por valores de compromiso, calidad, innovación y sostenibilidad. Actuamos con integridad y somos conscientes de nuestra responsabilidad social, buscando siempre hacer una contribución positiva a Uruguay. Estos valores nos guían en todo lo que hacemos, demostrando que somos ANCAP: Energía que Impulsa Uruguay" />
        </div>
    </div>
);

export default Ancap;
