import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <Link to='' ><img src='images/logo.png' alt='logo' className='logo'></img></Link>
        <div className='navs'>
            <Link to='/AI-XO'><p>AI-XO</p></Link>
            <Link to='/flip' ><p>Flip 'n Find</p></Link>
            <Link to='/hangbot'><p>Hang Bot</p></Link>
            <Link to='/motojump'><p>Moto Jump</p></Link>
        </div>
      </div>
    )
  }
}

export default Navbar