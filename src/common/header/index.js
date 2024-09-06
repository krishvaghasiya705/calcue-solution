import React from 'react'
import "./header.scss"
import "./header.scss"

import clacuelog from "../../assets/img/calcue logo.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div class="header-main">
      <div class="conteiner">
        <div class="header-inner">
          <div class="header-inner-logo">
            <img src={clacuelog} alt='clacuelog' width="136px" />
          </div>
          <div class="menu-button">
            <ul class="header-inner-menu">
              <li><Link to={"/"}>Home</Link ></li>
              <li><Link to={"/about"}>About us</Link ></li>
              <li><Link to={"/"}>Blogs</Link ></li>
              <li><Link to={"/"}>Careers</Link ></li>
              <li><Link to={"/"}>Support</Link ></li>
              <li><Link to={"/"}>Contact Us</Link ></li>
            </ul>
            <div class="menu-login-button">
              <button class="btn-login">login</button>
              <button class="btn-get">Get Access</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
