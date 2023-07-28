import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const linkStyle = {

  }

  return (
    <div className='home'>
      <h1>What are we playing?</h1>
      <div className='game-list'>
        <div className='game'>
          <Link to='/AI-XO'>AI-XO</Link>
        </div>
        <div className='game'>
          <Link to='/flip'>Flip 'n Find</Link>
        </div>
        <div className='game'>
          <Link to='/hangbot'>Hang Bot</Link>
        </div>
        <div className='game'>
          <Link to='/motojump'>Moto Jump</Link>
        </div>
      </div>

    </div>
  )
}

export default Home