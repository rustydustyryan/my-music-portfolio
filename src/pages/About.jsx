import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeadphones } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { BsRecord2 } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiSoundModuleFill } from "react-icons/ri";
import { RxMixerVertical } from "react-icons/rx";
import { FaRecordVinyl } from "react-icons/fa";
import { PiWaveform } from "react-icons/pi";
import { GiSoundWaves } from "react-icons/gi";
import { CiWavePulse1 } from "react-icons/ci";
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { FaGuitar } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { FaMountainSun } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <div className='about-container'>
      <div className='about-grid'>
        <div>
          <h1>About</h1>
          <p>
            This website is a portfolio for my audio production, recording, and songwriting of over 15 years. I studied Music Recording Technology in college and was awarded a certificate of prociciency in audio production, while getting to work in a multi-million dollar recording studio with top tier equipment and talent. Art, music, and design have been passions of mine for as long as I can remember, and I am pursuing them in a more professional capacity now. If you see or hear anything that I have done and would like to work with me, please don't hesitate to get in touch. There can never be too many artists and passionate people helping each other level up and create something greater than they would be able to on their own!
          </p>
          <p>
            Web development is another area of interest for me. I built this website with React, utilizing HTML, CSS, and JavaScript. My design and media expertise is continually growing, and I would love to talk about your creative projects and see where I can help. Thank you for stopping by and I look forward to our next collaboration!
            <br />
            <br />
            – Ryan
          </p>
        </div>
        <img src='/images/Ryan.jpg' target='_blank' rel='noopener norefferer' alt='Ryan Image'></img>
      </div>
      <div className='about-grid'>
        <div className='skills'>
          <h2>Skills</h2>
          <ul>
            <div>
              <li><FaHeadphones />Audio Production</li>
              <li><FaMicrophone />Recording</li>
              <li><BiSolidEdit />Editing</li>
              <li><RiSoundModuleFill />Mixing</li>
              <li><FaRecordVinyl />Mastering</li>
              <li><PiWaveform />Sound Design</li>
            </div>
            <div>
              <li><MdOutlineQueueMusic style={{ width: '110%' }}/>Composition</li>
              <li><IoMusicalNotes />Songwriting</li>
              <li><FaGuitar />6 Instrument Musician</li>
              <li><FaCode />Web Development</li>
              <li><MdComputer />Graphic Design</li>
              <li><FaPhotoVideo />Photo/Video Editing</li>
              <li><BsCameraFill />Digital Photography</li>
            </div>
          </ul>
        </div>
        <div className='links'>
          <h2>Links</h2>
          <p>Contact and follow me through the links below.</p>
          <ul>
            <li>
              <a href='https://ryandesign.co/' target='_blank' rel='noopener norefferer'><FaMountainSun />Portfolio</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ryan-andersen-45907b180/' target='_blank' rel='noopener norefferer'><FaLinkedin />LinkedIn</a>
            </li>
            <li>
              <Link to='/contact'><MdEmail />Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About