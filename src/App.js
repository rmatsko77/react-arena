import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import MatchGame from './Components/MatchGame/MatchGame'
import Hangman from './Components/Hangman/Hangman'
import MotoJump from './Components/MotoJump/MotoJump'
import TicTacToe from './Components/TicTacToe/TicTacToe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/flip' element={<MatchGame />} />
                    <Route path='/hangbot' element={<Hangman />} />
                    <Route path='/motojump' element={<MotoJump />} />
                    <Route path='/AI-XO' element={<TicTacToe />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
