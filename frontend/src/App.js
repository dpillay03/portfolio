import "./App.css";
import React, { useState } from "react";
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { StyledOffCanvas, Menu, Overlay } from "styled-off-canvas";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineHome, AiOutlineCodepen, AiOutlineMail } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Logo from "../src/assets/dp_logo.png";
import Cartoon from "../src/assets/brand_image.png";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <div class='navbar'>
          <Link to='/'>
            <div id='logo-container'>
              <img src={Logo} alt='Daniel Pillay' id='logo' />
            </div>
          </Link>

          <div id='main-menu-container'>
            <NavLink to='/' className='main-menu-item'>
              <AiOutlineHome
                className='main-menu-icon'
                size={"20px"}
                color={"#6600ff"}
                cursor={"pointer"}
              />
              Home
            </NavLink>

            <NavLink to='/projects' className='main-menu-item'>
              <AiOutlineCodepen
                className='main-menu-icon'
                size={"22px"}
                color={"#6600ff"}
              />
              Projects
            </NavLink>

            <NavLink to='/blog' className='main-menu-item'>
              <BsPencilSquare
                className='main-menu-icon'
                size={"17px"}
                color={"#6600ff"}
              />
              Blog
            </NavLink>

            <NavLink to='/blog' className='main-menu-item'>
              <AiOutlineMail
                className='main-menu-icon'
                size={"19px"}
                color={"#6600ff"}
              />
              Contact
            </NavLink>
          </div>

          <div id='mobile-nav-container'>
            <StyledOffCanvas
              menuBackground='#242a49'
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <RiMenu4Line
                onClick={() => setIsOpen(!isOpen)}
                id='menu-icon'
                size={"35px"}
                color={"#6600ff"}
              />

              <Menu className='nav-menu' height={"100%"}>
                <li>
                  <NavLink
                    to='/'
                    className='mobile-menu-item'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <AiOutlineHome
                      className='main-menu-icon'
                      size={"15px"}
                      color={"#6600ff"}
                      cursor={"pointer"}
                    />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/projects'
                    className='mobile-menu-item'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <AiOutlineCodepen
                      className='main-menu-icon'
                      size={"15px"}
                      color={"#6600ff"}
                    />
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/blog'
                    className='mobile-menu-item'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <BsPencilSquare
                      className='main-menu-icon'
                      size={"15px"}
                      color={"#6600ff"}
                    />
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/blog'
                    className='mobile-menu-item'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <AiOutlineMail
                      className='main-menu-icon'
                      size={"15px"}
                      color={"#6600ff"}
                    />
                    Contact
                  </NavLink>
                </li>

                <div id='cartoon-container'>
                  <img
                    id='cartoon '
                    src={Cartoon}
                    alt='cartoon Daniel Pillay'
                  ></img>
                </div>

                <div id='nav-social-container'>
                  <a href='https://www.linkedin.com/in/danielpillay/'>
                    <FaLinkedin
                      size={"30px"}
                      color={"#fff"}
                      className='nav-social-icon'
                    />
                  </a>
                  <a href='https://github.com/dpillay03'>
                    <FaGithubSquare
                      size={"30px"}
                      color={"#fff"}
                      className='nav-social-icon'
                    />
                  </a>
                  <a href='https://www.youtube.com/channel/UCJeru7Pd3DBcLOwXDWSt9vA'>
                    <FaYoutubeSquare
                      size={"30px"}
                      color={"#fff"}
                      className='nav-social-icon'
                    />
                  </a>
                  <a href='https://www.facebook.com/dan3pillay/'>
                    <FaFacebookSquare
                      size={"30px"}
                      color={"#fff"}
                      className='nav-social-icon'
                    />
                  </a>
                </div>

                <p id='close-nav' onClick={() => setIsOpen(!isOpen)}>
                  <span id='close-btn'>X</span> Close Menu
                </p>

                <p id='copyright'>
                  Copyright © Daniel Pillay {new Date().getFullYear()}
                </p>
              </Menu>

              <Overlay />
            </StyledOffCanvas>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blog/:slug' component={SinglePost} />
          <Route exact path='/blog' component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
