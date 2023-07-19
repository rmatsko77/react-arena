import React, { useState, useEffect } from 'react';
import { wordsData, alphabetData } from './Words';
import { BsQuestionSquare } from "react-icons/bs";

const Hangman = () => {
    const [word, setWord] = useState('');
    const [attempts, setAttempts] = useState(6);
    const [displayWord, setDisplayWord] = useState(null);
    const [message, setMessage] = useState('Click a letter to make a guess');
    const alphabet = alphabetData;
    const blankIcon = <BsQuestionSquare />
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
            image = 'hangman-imgs/attempt-6.png';
            break;
        case 5:
            image = 'hangman-imgs/attempt-5.png';
            break;
        case 4:
            image = 'hangman-imgs/attempt-4.png';
            break;
        case 3:
            image = 'hangman-imgs/attempt-3.png';
            break;
        case 2:
            image = 'hangman-imgs/attempt-2.png';
            break;
        case 1:
            image = 'hangman-imgs/attempt-1.png';
            break;
        case 0:
            image = 'hangman-imgs/attempt-0.png';
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
