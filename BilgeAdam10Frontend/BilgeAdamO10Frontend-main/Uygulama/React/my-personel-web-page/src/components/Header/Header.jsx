import React from 'react'
import Nav from '../Nav'

const Header = ({myLinks, bgColor, className}) => {

    


  return (
    <header className="dark-header"      style={{backgroundColor: bgColor} }>
        <Nav myLinks={myLinks}/>
    </header>
  )
}

export default Header