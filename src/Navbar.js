import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })

    return () => {
      window.removeEventListener("scroll")
    }
  }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" className="nav__logo" />
      <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user logo" className="nav__avatar" />
    </div>
  )
}

export default Navbar
