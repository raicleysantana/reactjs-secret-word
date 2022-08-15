import React from 'react';
import './GameOver.css';
// import { Container } from './styles';

const components = ({ retry }) => {
    return (
        <div>
            <h1>Game fim</h1>

            <button onClick={retry}>Resetar jogo</button>
        </div>
    );
}

export default components;