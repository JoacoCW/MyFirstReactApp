import React from 'react';

const Componente = () => {
    return <NuevoComponente name='Joaquín' lastName='Weiss' />
}

const NuevoComponente = (props) => {
    const jsx = <h1>Bienvenido: {props.lastName} {props.name}</h1>;
    return jsx;
}

export default Componente;