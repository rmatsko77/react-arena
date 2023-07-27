import React, { useState, useEffect } from 'react';
import { alphabetData } from './Words';
import attempt0 from './hangman-imgs/attempt-0.png' 
import attempt1 from './hangman-imgs/attempt-1.png' 
import attempt2 from './hangman-imgs/attempt-2.png' 
import attempt3 from './hangman-imgs/attempt-3.png' 
import attempt4 from './hangman-imgs/attempt-4.png' 
import attempt5 from './hangman-imgs/attempt-5.png' 
import attempt6 from './hangman-imgs/attempt-6.png' 

const Hangman = () => {
    const [word, setWord] = useState('');
    const [attempts, setAttempts] = useState(6);
    const [displayWord, setDisplayWord] = useState(null);
    const [message, setMessage] = useState('Click a letter to make a guess');
    const alphabet = alphabetData;
    let image

    const getWordLength = () => {
        return Math.floor(Math.random() * 7) + 3
    }

    useEffect(() => {
        const fetchRandomWord = async () => {
            const res = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${getWordLength()}`)
            const word = await res.json()
            const wordString = word.toString()

            setWord(wordString)
            setDisplayWord('_'.repeat(wordString.length));
        }

        fetchRandomWord()

    }, []);

    useEffect(() => {
        if (word && attempts === 0) {
            setMessage(`Game over! The word was "${word}".`);
        } else if (word === displayWord) {
            setMessage('Congratulations! You won!');
        }
    }, [word, displayWord, attempts]);

    const handleGuess = (guess) => {
        if (attempts <= 0) {
            return
        }

        if(word === displayWord) {
            return
        }
        if (word.includes(guess.letter)) {
            const updatedDisplayWord = word
                .split('')
                .map((letter, index) => (letter === guess.letter ? guess.letter : displayWord[index]))
                .join('');

            setDisplayWord(updatedDisplayWord);
            document.getElementById(guess.letter).setAttribute('disabled', '')
            document.getElementById(guess.letter).style.backgroundColor = '#E26D5C'
            document.getElementById(guess.letter).style.cursor = 'auto'

        } else {
            setAttempts((prevAttempts) => prevAttempts - 1);
            guess.active = 'inactive'
            document.getElementById(guess.letter).setAttribute('disabled', '')
        }
    };

    switch (attempts) {
        case 6:
            image = attempt6;
            break;
        case 5:
            image = attempt5;
            break;
        case 4:
            image = attempt4;
            break;
        case 3:
            image = attempt3;
            break;
        case 2:
            image = attempt2;
            break;
        case 1:
            image = attempt1;
            break;
        case 0:
            image = attempt0;
            break;

    }

    const handleReset = () => {
        
    }

    return (
        <div className='hangman-container'>
            <div className='image-container'>
                <img src={image}></img>
            </div>
            <p className='display-word'>{displayWord}</p>
            <p className='attempts'>Attempts left: <span className='attempts-number'>{attempts}</span></p>
            <p className='message'>{message}</p>
            <div className='alphabet'>
                {alphabet.map((letter) => (
                    <button className={letter.active} id={letter.letter} onClick={() => handleGuess(letter)}>{letter.letter}</button>
                ))}
            </div>
            <button className='reset-btn' onClick={() => window.location.reload()}>Reset Game</button>
        </div>
    );
};

export default Hangman;
