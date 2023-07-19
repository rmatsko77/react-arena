import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import MatchGame from './Components/MatchGame/MatchGame'
import Hangman from './Components/Hangman/Hangman'
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
                </Routes>
            </div>
        </BrowserRouter>
    )
}