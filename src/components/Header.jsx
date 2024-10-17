import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadphones } from "react-icons/fa6";
import { BsHeadphones } from "react-icons/bs";
import { TbWaveSawTool } from "react-icons/tb";
import { PiWaveform } from "react-icons/pi";

const Header = () => {
  return (
    <header>
      <Link to='/' className='icon'>
        <FaHeadphones />
        <TbWaveSawTool />
      </Link>
      <h1>Ryan Andersen Music</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
