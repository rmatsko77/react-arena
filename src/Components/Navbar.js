import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <Link to='' ><img src='logo.png' alt='logo' className='logo'></img></Link>
        <div className='navs'>
            <Link to='/flip' ><p>Flip 'n Find</p></Link>
            <Link to='/hangbot'><p>HangBot</p></Link>
            <Link to='/motojump'><p>MotoJump</p></Link>
            <p>Flip 'n Find</p>
        </div>
      </div>
    )
  }
}

export default Navbar