import React from 'react'
import { BsBootstrap } from 'react-icons/bs';
import { FaReact, FaNode, FaHtml5, FaCss3, FaPython, FaWordpress } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiMysql } from 'react-icons/si';

export const Skills = () => {
  return (
    <div className='container'>
      <h3>Skills</h3>
      <div className='logos'>

        <a href=""><FaReact size={50} /></a>
        <a href=""><FaNode size={50} /></a>
        <a href=""><FaHtml5 size={50} /></a>
        <a href=""><FaCss3 size={50} /></a>
        <a href=""><FaPython size={50} /></a>
        <a href=""><FaWordpress size={50} /></a>
        <a href=""><SiJavascript size={50} /></a>
        <a href=""><SiMysql size={50} /></a>
        <a href=""><SiMongodb size={50} /></a>
        <a href=""><BsBootstrap size={50} /></a>
      </div>
    </div>
  )
}
