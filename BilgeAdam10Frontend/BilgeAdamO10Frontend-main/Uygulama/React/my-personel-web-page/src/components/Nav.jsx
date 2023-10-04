import React from 'react'

const Nav = ({myLinks}) => {



  return (
    <ul>
        <li><a href="#">{myLinks[0]}</a></li>
        <li><a href="#">{myLinks[1]}</a></li>
        <li><a href="#">{myLinks[2]}</a></li>
        <li><a href="#">{myLinks[3]}</a></li>
        <li><a href="#">{myLinks[4]}</a></li>
    </ul>
  )
}

export default Nav