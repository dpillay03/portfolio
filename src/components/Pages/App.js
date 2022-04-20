import React from "react";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import SinglePost from "../modules/SinglePost";
import Post from "./Post";
import Contact from "./Contact";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Logo from "../../assets/logo.png";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='nav-wrapper'>
          <article>
            <Switch className='content'>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/about' component={About} />
              <Route exact path='/blog/:slug' component={SinglePost} />
              <Route exact path='/blog' component={Post} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </article>
          <aside>
            <ul>
              <img
                id='logo'
                src={Logo}
                alt="Daniel Pillay's personal branding logo dp"
              />
              <NavLink
                className='nav-item'
                exact
                to='/'
                style={(isActive) => ({
                  color: isActive ? "#fff " : "#FF651C",
                })}
              >
                <AiOutlineHome className='nav-icon' size={40} />
              </NavLink>

              <NavLink
                className='nav-item'
                to='about'
                style={(isActive) => ({
                  color: isActive ? "#fff" : "#FF651C",
                })}
              >
                <BsPerson className='nav-icon' size={40} />
              </NavLink>

              <NavLink
                className='nav-item'
                to='projects'
                style={(isActive) => ({
                  color: isActive ? "#fff" : "#FF651C",
                })}
              >
                <FaLaptopCode className='nav-icon' size={35} />
              </NavLink>

              <NavLink
                className='nav-item'
                to='contact'
                style={(isActive) => ({
                  color: isActive ? "#fff" : "#FF651C",
                })}
              >
                <GoMail className='nav-icon' size={40} />
              </NavLink>
            </ul>
          </aside>
        </div>
      </BrowserRouter>
    );
  }
}
