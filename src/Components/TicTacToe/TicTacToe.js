import React, { useState, useEffect } from 'react'

function TicTacToe() {

    const [isPlayerTurn, setIsPlayerTurn] = useState(null)
    const [isComputerTurn, setisComputerTurn] = useState(null)
    const [isGameActive, setIsGameActive] = useState(false)

    useEffect(() => {
        if (isComputerTurn && isGameActive) {
            setTimeout(computerTurn, 1500)
        }
    }, [isComputerTurn])

    const computerTurn = () => {
        if (isGameActive) {
            const unmarked = document.getElementsByClassName('unmarked')
            const grid = document.getElementById('grid').children
            if (grid[0].innerHTML == 'X' && grid[1].innerHTML == 'X' && grid[2].innerHTML == '') {
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
            } else if (grid[0].innerHTML == 'O' && grid[1].innerHTML == 'O' && grid[2].innerHTML == '') {
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

    const handleGameStart = () => {
        setIsPlayerTurn(true)
        setisComputerTurn(false)
        setIsGameActive(true)
    }

    const checkWinner = () => {
        const grid = document.getElementById('grid').children
        if (grid[0].innerHTML == 'X' && grid[1].innerHTML == 'X' && grid[2].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'O' && grid[1].innerHTML == 'O' && grid[2].innerHTML == 'O') {
            setIsGameActive(false)
        } else if (grid[3].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[5].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[3].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[5].innerHTML == 'O') {
            setIsGameActive(false)
        } else if (grid[6].innerHTML == 'X' && grid[7].innerHTML == 'X' && grid[8].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[6].innerHTML == 'O' && grid[7].innerHTML == 'O' && grid[8].innerHTML == 'O') {
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'X' && grid[3].innerHTML == 'X' && grid[6].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'O' && grid[3].innerHTML == 'O' && grid[6].innerHTML == 'O') {
            setIsGameActive(false)
        } else if (grid[1].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[7].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[1].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[7].innerHTML == 'O') {
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'X' && grid[5].innerHTML == 'X' && grid[8].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'O' && grid[5].innerHTML == 'O' && grid[8].innerHTML == 'O') {
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[8].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[0].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[8].innerHTML == 'O') {
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'X' && grid[4].innerHTML == 'X' && grid[6].innerHTML == 'X') {
            setIsGameActive(false)
        } else if (grid[2].innerHTML == 'O' && grid[4].innerHTML == 'O' && grid[6].innerHTML == 'O') {
            setIsGameActive(false)
        }
    }

    return (
        <div className='tic-tac-toe-container'>
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
            <button onClick={handleGameStart}>TEST</button>
            <div className='startpage'>

            </div>
        </div>
    )
}

export default TicTacToe