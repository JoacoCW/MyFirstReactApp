import React from 'react';

const Componente = (props) => {
    const {texto, numero} = props;
    return (
        numero<1 ?
        <>
            <h1>Tu carro está vacío</h1>
        </>
        :
        <>
        <h1>Tu carro tiene elementos</h1>
        </>
    )
}

export default Componente;