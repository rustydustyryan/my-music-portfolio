import React from 'react'
import { FaHeadphones } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { RiSoundModuleFill } from "react-icons/ri";
import { FaRecordVinyl } from "react-icons/fa";
import { TbWaveSawTool } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { FaGuitar } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { HiPhoto } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { FaMountainSun } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className='about-container'>
      <div className='about-grid'>
        <div>
          <h1>Contact</h1>
          <p>
            Please feel free to send me a message. I would love to hear about your project and how I might be able to help. I am always looking for new opportunities to collaborate and create something special. You can also find me on LinkedIn and view my portfolio at the links below. Thank you for your interest and I look forward to hearing from you!
            <br />
            <br />
            – Ryan
          </p>
          <p className='email-box'>
            ryanandersen.design@gmail.com
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
              <li><TbWaveSawTool />Sound Design</li>
              <li><IoMusicalNotes />Songwriting</li>
            </div>
            <div>
              <li><FaGuitar />6 Instrument Musician</li>
              <li><MdOutlineQueueMusic />Composition</li>
              <li><FaCode />Web Development</li>
              <li><MdComputer />Graphic Design</li>
              <li><HiPhoto />Photo Editing</li>
              <li><FaVideo />Video Editing</li>
              <li><BsCameraFill />Digital Photography</li>
            </div>
          </ul>
        </div>
        <div className='links'>
          <h2>Links</h2>
          <p>Follow to see more of my work.</p>
          <ul>
            <li>
              <a href='https://ryandesign.co/' target='_blank' rel='noopener norefferer'><FaMountainSun />Portfolio</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ryan-andersen-45907b180/' target='_blank' rel='noopener norefferer'><FaLinkedin />LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact