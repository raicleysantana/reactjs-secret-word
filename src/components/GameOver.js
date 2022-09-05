import React from 'react';
import './GameOver.css';
// import { Container } from './styles';

const components = ({ retry, score }) => {
    return (
        <div>
            <h1>Fim de jogo</h1>

            <h2>
                A sua pontuação foi: <span>{score}</span>
            </h2>
            <button onClick={retry}>Resetar jogo</button>
        </div>
    );
}

export default components;