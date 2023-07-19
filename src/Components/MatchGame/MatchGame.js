import React, { useState, useEffect } from 'react'
import { SiPreact } from "react-icons/si";
import { BsFillSuitClubFill, BsFillSuitDiamondFill, BsFillSuitHeartFill, BsFillSuitSpadeFill, BsStarFill } from "react-icons/bs";
import { FaSun, FaMoon, FaSmileBeam, FaWindowClose } from "react-icons/fa";

function MatchGame() {

    const [cards, setCards] = useState([])
    const [gameIsActive, setGameIsActive] = useState(false)
    const [flippedCards, setFlippedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [time, setTime] = useState(0)
    const [bestTime, setBestTime] = useState('--')

    const cardData = [
        { id: 1, content: <BsFillSuitDiamondFill />, match: 1 },
        { id: 2, content: <BsFillSuitDiamondFill />, match: 1 },
        { id: 3, content: <BsFillSuitHeartFill />, match: 2 },
        { id: 4, content: <BsFillSuitHeartFill />, match: 2 },
        { id: 5, content: <BsFillSuitClubFill />, match: 3 },
        { id: 6, content: <BsFillSuitClubFill />, match: 3 },
        { id: 7, content: <BsFillSuitSpadeFill />, match: 4 },
        { id: 8, content: <BsFillSuitSpadeFill />, match: 4 },
        { id: 9, content: <FaSun />, match: 5 },
        { id: 10, content: <FaSun />, match: 5 },
        { id: 11, content: <FaMoon />, match: 6 },
        { id: 12, content: <FaMoon />, match: 6 },
        { id: 13, content: <FaSmileBeam />, match: 7 },
        { id: 14, content: <FaSmileBeam />, match: 7 },
        { id: 15, content: <BsStarFill />, match: 8 },
        { id: 16, content: <BsStarFill />, match: 8 },
    ];

    useEffect(() => {
        let timer;

        if (gameIsActive) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + .1)
            }, 100)
        }
        if (matchedCards.length === 16) {
            setGameIsActive(false);
            clearInterval(timer);
            if (time < bestTime || bestTime == '--') {
                setBestTime(`${formatTime(time)}`)
                document.getElementById('congrats-container').style.display = 'flex'
            }
        }

        return () => clearInterval(timer)
    }, [gameIsActive, cards.length, matchedCards])

    useEffect(() => {
        shuffleCards()
    }, [])

    const shuffleCards = () => {
        const shuffledCards = [...cardData].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
    };

    const handleCardClick = (card) => {
        if (!gameIsActive) {
            setGameIsActive(true);
        }

        if (flippedCards.length === 1 && flippedCards[0].id === card.id) {
            return;
        }

        if (flippedCards.length === 0) {
            setFlippedCards([card]);

        } else if (flippedCards.length === 1) {
            const matched = flippedCards[0].match === card.match;

            setFlippedCards((prevFlippedCards) => [...prevFlippedCards, card]);

            if (matched) {
                setMatchedCards((prevMatchedCards) => [...prevMatchedCards, flippedCards[0], card]);
            }

            setTimeout(() => {
                setFlippedCards([]);
            }, 1050);
        }

        if (flippedCards.includes(card) || flippedCards.length === 2 || matchedCards.includes(card)) {
            return
        } else {
            document.getElementById(card.id).style.width = '0';
            setTimeout(() => {
                document.getElementById(card.id).style.width = '125px';
            }, 50)
        }
    }

    const resetGame = () => {
        setGameIsActive(false)
        setFlippedCards([])
        setMatchedCards([])
        setTime(0)
        setCards([])
        shuffleCards()
    }

    const handleClose = () => {
        document.getElementById('congrats-container').style.display = 'none'
    }

    const formatTime = (time) => {
        const stringTime = time.toString()
        const index = stringTime.indexOf('.')

        return stringTime.slice(0, index + 2)
    }


    return (
        <div className='match-container'>
            <div className='times'>
                <div className='timer'>Time: {formatTime(time)} seconds</div>
                <div className='best-time'>Best Time: {bestTime} seconds</div>
            </div>
            <div className='card-grid'>
                {cards.map((card) => (
                    <div
                        className='card'
                        id={card.id}
                        key={card.id}
                        onClick={() => handleCardClick(card)}
                        style={{
                            backgroundColor:
                                matchedCards.includes(card) || flippedCards.includes(card) ? '#E26D5C' : '#96E6B3',
                        }}
                    >
                        {flippedCards.includes(card) || matchedCards.includes(card) ? card.content : <SiPreact />}
                    </div>
                ))}
            </div>
            <button className='reset-btn' onClick={resetGame}>Reset Game</button>
            <div className='congrats-container' id='congrats-container'>
                <div className='congrats'>
                    <button onClick={handleClose} id='congrats-close-btn'><FaWindowClose /></button>
                    <h1>Congrats! You beat your best time!</h1>
                    <h2>Your new best time is<span className='score'> {formatTime(bestTime)} seconds.</span></h2>
                    <h3>See if you can beat it!</h3>
                </div>
            </div>
        </div>
    )

}
export default MatchGame