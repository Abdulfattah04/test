"use client";


import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  const path = useLocation().pathname
  return (
    <Navbar fluid rounded className='border-b-2'>
    <Navbar.Brand href="/" className='whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white self-center'>
    <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-2 text-white rounded-lg'>Atibyan</span> 
    Blog
    </Navbar.Brand>
    <div className="flex md:order-2 gap-2 ">
        <Button>
            <FaMoon />
        </Button>
    <Link to='/signin'>
      <Button gradientDuoTone='purpleToPink' outline>Sign in</Button>
    </Link>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/" active= {path==='/'}>
        Home
      </Navbar.Link>
      <Navbar.Link href="/about" active= {path==='/about'}>About</Navbar.Link>
      <Navbar.Link href="/dashboard" active= {path==='/dashboard'}>Dashboard</Navbar.Link>
      <Navbar.Link href="/project" active= {path==='/project'}>Project</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  
  )
}
