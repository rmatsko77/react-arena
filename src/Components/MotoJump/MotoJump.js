import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'

function MotoJump() {

    const WORLD_HEIGHT = 30
    const WORLD_WIDTH = 100
    const [gameIsActive, setGameIsActive] = useState(false)
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [isJumping, setIsJumping] = useState(false)
    const [backgroundImg, setBackgroundImg] = useState('moto-imgs/bg-png.png')
    let gravity = 0.9
    let position = 0
    const obstacles = [
        {
            name: 'snake',
            src: 'moto-imgs/snake.gif',
            height: '80px',
            width: '100px',
            bottom: '5px'
        },
        {
            name: 'ninja',
            src: 'moto-imgs/ninja.gif',
            height: '100px',
            width: '50px',
            bottom: '0px'
        },
        {
            name: 'bird',
            src: 'moto-imgs/bird.gif',
            height: '70px',
            width: '70x',
            bottom: '20px'
        }
    ]

    window.addEventListener('resize', setPixelToWorldScale)

    const setPixelToWorldScale = () => {
        const gameElem = document.getElementById('game')
        let worldToPixelScale
        if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
            worldToPixelScale = window.innerWidth / WORLD_WIDTH
        } else {
            worldToPixelScale = window.innerHeight / WORLD_HEIGHT
        }

        gameElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
        gameElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
    }

    const handleStartGame = () => {
        setGameIsActive(true)
        generateObstacle()
        document.removeEventListener('keypress', handleStartGame)
        document.addEventListener('keypress', control)
        document.getElementById('instructions').style.display = 'none'
    }

    useEffect(() => {
        let timex;

        if (gameIsActive) {
            timex = setInterval(() => {
                setScore(prevScore => prevScore + 10)
            }, 100)
        } if (!gameIsActive) {
            clearInterval(timex)
            if (score > bestScore) {
                setBestScore(score)
                document.getElementById('congrats-container').style.display = 'flex'
            }
        }

        return () => clearInterval(timex)
    }, [gameIsActive])

    useEffect(() => {
        document.addEventListener('keypress', handleStartGame)
    }, [])

    const control = (e) => {
        jump()
        document.removeEventListener('keypress', control)
    }

    useEffect(() => {

        const moto = document.getElementById('moto')

        if (!isJumping) {
            moto.style.transform = 'rotate(0turn)'
        } else {
            moto.style.transform = 'rotate(-0.15turn)'

        }
    }, [isJumping])

    useEffect(() => {
        if (gameIsActive) {
            setBackgroundImg('moto-imgs/bg-gif.gif')
        } else {
            setBackgroundImg('moto-imgs/bg-png.png')
        }

    }, [gameIsActive])

    function jump() {

        let count = 0
        const moto = document.querySelector('.moto')
        let timerId = setInterval(() => {

            if (count === 15) {
                clearInterval(timerId)
                let downTimerId = setInterval(() => {
                    if (count === 0) {
                        clearInterval(downTimerId)
                        setIsJumping(false)
                        document.addEventListener('keypress', control)
                    }
                    count--
                    position -= 5
                    position = position * gravity
                    moto.style.bottom = position + 'px'
                }, 20)

            }

            setIsJumping(true)
            position += 30
            count++
            position = position * gravity
            moto.style.bottom = position + 'px'
        }, 20)
    }

    const generateObstacle = () => {

        const game = document.querySelector('.game-container')
        const selection = obstacles[Math.floor(Math.random() * 3)]
        let obstaclePosition = -10
        let randomTime = (Math.random() * 2000) + 1000
        const obstacle = document.createElement('img')
        obstacle.src = selection.src
        obstacle.classList.add('obstacle')
        obstacle.classList.add(selection.name)
        game.appendChild(obstacle)
        obstacle.style.right = obstaclePosition + '%'
        obstacle.style.height = selection.height
        obstacle.style.width = selection.width
        obstacle.style.bottom = selection.bottom


        let timerId = setInterval(() => {
            if (obstaclePosition < 100 && obstaclePosition > 85 && position < parseInt(selection.height) - 10) {
                clearInterval(timerId)
                clearTimeout(newObstacle)
                setGameIsActive(false)
                document.getElementById('reset-btn').style.display = 'block'
                document.removeEventListener('keypress', control)
                document.removeEventListener('keypress', control)
                document.getElementById('game-over').style.display = 'block'
            }
            obstaclePosition = obstaclePosition + 1.2
            obstacle.style.right = obstaclePosition + '%'
        }, 10)

        const newObstacle = setTimeout(generateObstacle, randomTime)
    }

    const handleReset = () => {
        const game = document.querySelector('.game-container')
        game.removeChild(game.lastChild)
        setScore(0)
        document.getElementById('reset-btn').style.display = 'none'
        handleStartGame()
        document.getElementById('game-over').style.display = 'none'
    }

    const handleClose = () => {
        document.getElementById('congrats-container').style.display = 'none'
    }

    return (
        <div className='moto-container' id='moto-container'>
            <h3 id='instructions'>Press any key to jump and begin game!</h3>
            <div className='scores'>
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
            <div className='game-container' id='game' style={{ backgroundImage: 'url(' + backgroundImg + ')' }}>
                <img src='moto-imgs/moto.gif' id='moto' className='moto'></img>
                <h4 id='game-over'>Game over! score: {score}</h4>
            </div>
            <button onClick={handleReset} className='reset-btn' id='reset-btn'>Play Again</button>
            <div className='congrats-container' id='congrats-container'>
                <div className='congrats'>
                    <button onClick={handleClose} id='congrats-close-btn'><FaWindowClose /></button>
                    <h1>Congrats! You beat your best score!</h1>
                    <h2>Your new best score is<span className='score'> {bestScore}</span></h2>
                    <h3>See if you can beat it!</h3>
                </div>
            </div>
        </div>
    )
}

export default MotoJump