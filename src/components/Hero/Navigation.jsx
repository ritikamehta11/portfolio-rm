import React from 'react'
import '../../styles.css'

export const Navigation = () => {
  return (
    <div className='nav'>
      <div className='logo'>Rm</div>
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">projects</a></li>
        <li><a href="#">contact</a></li>
        {/* <li><a href="#"></a></li> */}
       
      </ul>
    </div>
  )
}
