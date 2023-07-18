import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <img src='logo.png' alt='logo' className='logo'></img>
        <div className='navs'>
            <p>Flip 'n Find</p>
            <p>Flip 'n Find</p>
            <p>Flip 'n Find</p>
            <p>Flip 'n Find</p>
        </div>
      </div>
    )
  }
}

export default Navbar