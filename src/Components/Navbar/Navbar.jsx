import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {

  const [sticky,setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true)
  }




  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
        <img src={logo} className='logo' />
        <ul className={mobileMenu?'':'hide-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}> Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-130} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='textemonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li><Link className='btn'
            to='contact' smooth={true} offset={-210} duration={500}>Contact us</Link></li>
        </ul>
        <img src={Menu} className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar