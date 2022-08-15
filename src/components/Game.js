import React from 'react';
import './Game.css';
// import { Container } from './styles';

const components = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) => {

    const submit = (event) => {
        event.preventDefault();
    }
    console.log(guessedLetters);

    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>

            <h1>Adivinhe a palavra</h1>

            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>

            <p>Você ainda tem {guesses} tentativa(s).</p>

            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letters) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                ))}

            </div>

            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra:</p>

                <form onSubmit={submit}>
                    <input type="text" name="letter" maxLength={1} required autoComplete="off" />

                    <button>JOGAR!</button>
                </form>
            </div>

            <div className="wrongLetterContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}</span>
                ))}
            </div>

            <button onClick={verifyLetter}>Finalizar jogo</button>
        </div>
    );
}

export default components;