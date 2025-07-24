'use client'

import { useState } from 'react'
import { Navbar, NavLink } from 'react-bootstrap'
import { Logo } from '../logo'
import styles from './index.module.css'

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  function handleToggleMenuModal() {
    setIsOpenMenu((state) => !state)
  }
  return (
    <header className='position-absolute z-3 w-100 pt-5' id='header-main'>
      <Navbar
        className='navbar-dark position-relative container p-0'
        expand='md'
      >
        <Navbar.Brand className='z-3'>
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='border-0 shadow-none'
          onClick={handleToggleMenuModal}
        >
          {isOpenMenu ? (
            <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
              <title id='icon-title'>Close</title>
              <path
                d='M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z'
                fill='#FFF'
                fill-rule='evenodd'
              />
            </svg>
          ) : (
            <svg width='24' height='16' xmlns='http://www.w3.org/2000/svg'>
              <title id='icon-title'>Open</title>
              <g fill='#FFF' fill-rule='evenodd'>
                <path d='M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z' />
              </g>
            </svg>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          className={`justify-content-end text-white ${styles.header_navbar}`}
          id='basic-navbar-nav'
        >
          <NavLink href='/'>About</NavLink>
          <NavLink href='/'>Careers</NavLink>
          <NavLink href='/'>Events</NavLink>
          <NavLink href='/'>Products</NavLink>
          <NavLink href='/'>Support</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
