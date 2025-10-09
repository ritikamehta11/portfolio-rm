import React from 'react'
import { BsBootstrap } from 'react-icons/bs';
import { FaReact, FaNode, FaHtml5, FaCss3, FaPython, FaWordpress } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiMysql } from 'react-icons/si';

export const Skills = () => {
  return (
    <div className='container'>
      <h3>Skills</h3>
      <div className='logos'>

        <a href=""><FaReact size={30} /></a>
        <a href=""><FaNode size={30} /></a>
        <a href=""><FaHtml5 size={30} /></a>
        <a href=""><FaCss3 size={30} /></a>
        <a href=""><FaPython size={30} /></a>
        <a href=""><FaWordpress size={30} /></a>
        <a href=""><SiJavascript size={30} /></a>
        <a href=""><SiMysql size={30} /></a>
        <a href=""><SiMongodb size={30} /></a>
        <a href=""><BsBootstrap size={30} /></a>
      </div>
    </div>
  )
}
