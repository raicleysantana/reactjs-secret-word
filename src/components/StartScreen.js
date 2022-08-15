import React from 'react';
import './StartScreen.css';


// import { Container } from './styles';

const components = ({ startGame }) => {
    return (
        <div className="start">
            <h1>Secret word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    );

}

export default components;