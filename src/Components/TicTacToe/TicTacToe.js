import React, { useState, useEffect } from 'react'

function TicTacToe() {

    const [isPlayerTurn, setIsPlayerTurn] = useState(null)
    const [isComputerTurn, setisComputerTurn] = useState(null)
    const [isGameActive, setIsGameActive] = useState(false)
    const [message, setMessage] = useState(null)
    const [winner, setWinner] = useState(null)

    useEffect(() => {
        const randomTimer = (Math.random() * 1700) + 300
        if (isComputerTurn && isGameActive) {
            setTimeout(computerTurn, randomTimer)
        }
    }, [isComputerTurn])

    useEffect(() => {
        if (winner === 'player') {
            setMessage(' You won! ')
            document.getElementById('reset-btn').style.display = 'block'
            return
        } else if (winner === 'ai') {
            setMessage(' You lost... ')
            document.getElementById('reset-btn').style.display = 'block'
            return
        } else if (winner === 'tie') {
            setMessage(' Its a draw... ')
            document.getElementById('reset-btn').style.display = 'block'
            return
        }
        if (isPlayerTurn) {
            setMessage(' Its your turn... make a move ')
            document.getElementById('message').style.padding = '1rem'
        } else if (isComputerTurn) {
            setMessage(' The AI is thinking... ')
            document.getElementById('message').style.padding = '1rem'
        }
    })

    useEffect(() => {
        if (!document.getElementsByClassName('unmarked').length) {
            setIsGameActive(false)
            setWinner('tie')
        }
    })

    const computerTurn = () => {
        if (isGameActive) {
            const unmarked = document.getElementsByClassName('unmarked')
            const grid = document.getElementById('grid').children
            if (grid[0].innerHTML == 'O' && grid[1].innerHTML == 'O' && grid[2].innerHTML == '') {
                grid[2].innerHTML = 'O'
                grid[2].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'O' && grid[2].innerHTML == 'O' && grid[1].innerHTML == '') {
                grid[1].innerHTML = 'O'
                grid[1].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'O' && grid[1].innerHTML == 'O' && grid[0].innerHTML == '') {
                grid[0].innerHTML = 'O'
                grid[0].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[3].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[5].innerHTML == '') {
                grid[5].innerHTML = 'O'
                grid[5].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'O' && grid[5].innerHTML == 'O' && grid[3].innerHTML == '') {
                grid[3].innerHTML = 'O'
                grid[3].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[3].innerHTML == 'O' && grid[5].innerHTML == 'O' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[6].innerHTML == 'O' && grid[7].innerHTML == 'O' && grid[8].innerHTML == '') {
                grid[8].innerHTML = 'O'
                grid[8].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[7].innerHTML == 'O' && grid[8].innerHTML == 'O' && grid[6].innerHTML == '') {
                grid[6].innerHTML = 'O'
                grid[6].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[6].innerHTML == 'O' && grid[8].innerHTML == 'O' && grid[7].innerHTML == '') {
                grid[7].innerHTML = 'O'
                grid[7].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'O' && grid[3].innerHTML == 'O' && grid[6].innerHTML == '') {
                grid[6].innerHTML = 'O'
                grid[6].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'O' && grid[6].innerHTML == 'O' && grid[3].innerHTML == '') {
                grid[3].innerHTML = 'O'
                grid[3].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[3].innerHTML == 'O' && grid[6].innerHTML == 'O' && grid[0].innerHTML == '') {
                grid[0].innerHTML = 'O'
                grid[0].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[1].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[7].innerHTML == '') {
                grid[7].innerHTML = 'O'
                grid[7].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[1].innerHTML == 'O' && grid[7].innerHTML == 'O' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'O' && grid[7].innerHTML == 'O' && grid[1].innerHTML == '') {
                grid[1].innerHTML = 'O'
                grid[1].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'O' && grid[5].innerHTML == 'O' && grid[8].innerHTML == '') {
                grid[8].innerHTML = 'O'
                grid[8].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'O' && grid[8].innerHTML == 'O' && grid[5].innerHTML == '') {
                grid[5].innerHTML = 'O'
                grid[5].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[5].innerHTML == 'O' && grid[8].innerHTML == 'O' && grid[2].innerHTML == '') {
                grid[2].innerHTML = 'O'
                grid[2].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[8].innerHTML == '') {
                grid[8].innerHTML = 'O'
                grid[8].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'O' && grid[8].innerHTML == 'O' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'O' && grid[8].innerHTML == 'O' && grid[0].innerHTML == '') {
                grid[0].innerHTML = 'O'
                grid[0].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[6].innerHTML == '') {
                grid[6].innerHTML = 'O'
                grid[6].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'O' && grid[6].innerHTML == 'O' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'O' && grid[6].innerHTML == 'O' && grid[2].innerHTML == '') {
                grid[2].innerHTML = 'O'
                grid[2].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'X' && grid[1].innerHTML == 'X' && grid[2].innerHTML == '') {
                grid[2].innerHTML = 'O'
                grid[2].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'X' && grid[2].innerHTML == 'X' && grid[1].innerHTML == '') {
                grid[1].innerHTML = 'O'
                grid[1].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'X' && grid[1].innerHTML == 'X' && grid[0].innerHTML == '') {
                grid[0].innerHTML = 'O'
                grid[0].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[3].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[5].innerHTML == '') {
                grid[5].innerHTML = 'O'
                grid[5].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'X' && grid[5].innerHTML == 'X' && grid[3].innerHTML == '') {
                grid[3].innerHTML = 'O'
                grid[3].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[3].innerHTML == 'X' && grid[5].innerHTML == 'X' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[6].innerHTML == 'X' && grid[7].innerHTML == 'X' && grid[8].innerHTML == '') {
                grid[8].innerHTML = 'O'
                grid[8].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[7].innerHTML == 'X' && grid[8].innerHTML == 'X' && grid[6].innerHTML == '') {
                grid[6].innerHTML = 'O'
                grid[6].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[6].innerHTML == 'X' && grid[8].innerHTML == 'X' && grid[7].innerHTML == '') {
                grid[7].innerHTML = 'O'
                grid[7].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'X' && grid[3].innerHTML == 'X' && grid[6].innerHTML == '') {
                grid[6].innerHTML = 'O'
                grid[6].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'X' && grid[6].innerHTML == 'X' && grid[3].innerHTML == '') {
                grid[3].innerHTML = 'O'
                grid[3].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[6].innerHTML == 'X' && grid[3].innerHTML == 'X' && grid[0].innerHTML == '') {
                grid[0].innerHTML = 'O'
                grid[0].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[1].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[7].innerHTML == '') {
                grid[7].innerHTML = 'O'
                grid[7].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[1].innerHTML == 'X' && grid[7].innerHTML == 'X' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'X' && grid[7].innerHTML == 'X' && grid[1].innerHTML == '') {
                grid[1].innerHTML = 'O'
                grid[1].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'X' && grid[5].innerHTML == 'X' && grid[8].innerHTML == '') {
                grid[8].innerHTML = 'O'
                grid[8].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'X' && grid[8].innerHTML == 'X' && grid[5].innerHTML == '') {
                grid[5].innerHTML = 'O'
                grid[5].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[5].innerHTML == 'X' && grid[8].innerHTML == 'X' && grid[2].innerHTML == '') {
                grid[2].innerHTML = 'O'
                grid[2].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[8].innerHTML == '') {
                grid[8].innerHTML = 'O'
                grid[8].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[0].innerHTML == 'X' && grid[8].innerHTML == 'X' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'X' && grid[8].innerHTML == 'X' && grid[0].innerHTML == '') {
                grid[0].innerHTML = 'O'
                grid[0].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[6].innerHTML == '') {
                grid[6].innerHTML = 'O'
                grid[6].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[2].innerHTML == 'X' && grid[6].innerHTML == 'X' && grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == 'X' && grid[6].innerHTML == 'X' && grid[2].innerHTML == '') {
                grid[2].innerHTML = 'O'
                grid[2].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else if (grid[4].innerHTML == '') {
                grid[4].innerHTML = 'O'
                grid[4].classList.remove('unmarked')
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
                return
            } else {
                const randomIndex = Math.floor(Math.random() * unmarked.length)
                const randomSquare = unmarked[randomIndex]
                if (randomSquare) {
                    randomSquare.innerHTML = 'O'
                    randomSquare.classList.remove('unmarked')
                }
                checkWinner()
                setIsPlayerTurn(true)
                setisComputerTurn(false)
            }

        }
    }

    const handleMouseOver = (e) => {
        if (isGameActive) {
            if (isPlayerTurn) {
                const id = e.target.id
                const element = document.getElementById(id)
                if (element.classList.value.includes('unmarked')) {
                    element.innerHTML = 'X'
                }
            }
        }
    }

    const handleMouseOut = (e) => {
        if (isPlayerTurn) {
            const id = e.target.id
            const element = document.getElementById(id)
            if (element.classList.value.includes('unmarked')) {
                element.innerHTML = ''
            }
        }
    }

    const handlePlaceMarker = (e) => {
        if (isGameActive) {
            if (isPlayerTurn) {
                const id = e.target.id
                const element = document.getElementById(id)
                if (!element.classList.value.includes('unmarked')) {
                    return
                }
                element.innerHTML = 'X'
                setIsPlayerTurn(false)
                setisComputerTurn(true)
                element.classList.remove('unmarked')
                checkWinner()
            }
        }
    }

    const handleGameStart = (e) => {
        if (e.target.id === 'me') {
            setIsPlayerTurn(true)
            setisComputerTurn(false)
        } else if (e.target.id === 'ai') {
            setIsPlayerTurn(false)
            setisComputerTurn(true)
        }

        setIsGameActive(true)
        document.querySelector('.startpage').style.display = 'none'
    }

    const checkWinner = () => {
        const grid = document.getElementById('grid').children
        if (grid[0].innerHTML == 'X' && grid[1].innerHTML == 'X' && grid[2].innerHTML == 'X') {
            setIsGameActive(false)
            setWinner('player')
        } else if (grid[0].innerHTML == 'O' && grid[1].innerHTML == 'O' && grid[2].innerHTML == 'O') {
            setIsGameActive(false)
            setWinner('ai')
        } else if (grid[3].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[5].innerHTML == 'X') {
            setWinner('player')
            setIsGameActive(false)
        } else if (grid[3].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[5].innerHTML == 'O') {
            setWinner('ai')
            setIsGameActive(false)
        } else if (grid[6].innerHTML == 'X' && grid[7].innerHTML == 'X' && grid[8].innerHTML == 'X') {
            setWinner('player')
            setIsGameActive(false)
        } else if (grid[6].innerHTML == 'O' && grid[7].innerHTML == 'O' && grid[8].innerHTML == 'O') {
            setWinner('ai')
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'X' && grid[3].innerHTML == 'X' && grid[6].innerHTML == 'X') {
            setWinner('player')
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'O' && grid[3].innerHTML == 'O' && grid[6].innerHTML == 'O') {
            setWinner('ai')
            setIsGameActive(false)
        } else if (grid[1].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[7].innerHTML == 'X') {
            setWinner('player')
            setIsGameActive(false)
        } else if (grid[1].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[7].innerHTML == 'O') {
            setWinner('ai')
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'X' && grid[5].innerHTML == 'X' && grid[8].innerHTML == 'X') {
            setWinner('player')
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'O' && grid[5].innerHTML == 'O' && grid[8].innerHTML == 'O') {
            setWinner('ai')
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[8].innerHTML == 'X') {
            setWinner('player')
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[8].innerHTML == 'O') {
            setWinner('ai')
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[6].innerHTML == 'X') {
            setWinner('player')
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[6].innerHTML == 'O') {
            setWinner('ai')
            setIsGameActive(false)
        }
    }

    return (
        <div className='tic-tac-toe-container'>
            <h2 className='message' id='message'>{message}</h2>
            <div className='game-grid' id='grid'>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-1'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-2'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-3'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-4'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-5'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-6'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-7'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-8'></div>
                <div onClick={handlePlaceMarker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='box unmarked' id='cell-9'></div>
            </div>
            <div className='startpage'>
                <p>Who should go first?</p>
                <div className='start-btns'>
                    <button onClick={handleGameStart} id='me'>Me</button>
                    <button onClick={handleGameStart} id='ai'>AI</button>
                </div>
            </div>
            <button className='reset-btn' id='reset-btn' onClick={() => window.location.reload()}>Play Again</button>
        </div>
    )
}

export default TicTacToe