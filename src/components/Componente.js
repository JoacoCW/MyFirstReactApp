import React from 'react';

const Componente = () => {
    return <NuevoComponente name='Joaquín' lastName='Weiss' />
}

const NuevoComponente = (props) => {
    const jsx = <h1>Bienvenido: {props.name} {props.lastName}</h1>;
    return jsx;
}

export default Componente;