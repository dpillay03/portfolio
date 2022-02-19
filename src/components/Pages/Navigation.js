import React from "react";
import "../../style/nav.scss";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  BsHouseDoor,
  BsFillPersonFill,
  BsCodeSlash,
  BsEnvelope,
} from "react-icons/bs";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Sidebar from "react-sidebar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import SinglePost from "../../components/SinglePost";
import Post from "./Post";
import Contact from "./Contact";
import DarkMode from "../DarkMode";
import NavLogo from "../../assets/logo.png";

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <nav>
            <div
              id='menu-container'
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 10,
              }}
            >
              <div id='left-column'>
                <Sidebar
                  sidebar={
                    <div id='main-menu'>
                      <img
                        id='nav-logo'
                        src={NavLogo}
                        alt='menu navigation button'
                      />
                      <NavLink
                        to='/'
                        className='main-menu-item'
                        style={{ wordSpacing: "10px" }}
                        onClick={() => this.onSetSidebarOpen(false)}
                      >
                        <span className='menu-icon'>
                          <BsHouseDoor
                            className='menu-icon'
                            size={20}
                            style={{
                              color: "#fe883c",
                              verticalAlign: "middle",
                              wordSpacing: "30px",
                            }}
                          />{" "}
                        </span>
                        Home{" "}
                      </NavLink>

                      <NavLink
                        to='/about'
                        className='main-menu-item'
                        style={{ wordSpacing: "10px" }}
                        onClick={() => this.onSetSidebarOpen(false)}
                      >
                        {" "}
                        <span className='menu-icon'>
                          <BsFillPersonFill
                            className='menu-icon'
                            size={20}
                            style={{
                              color: "#fe883c",
                              verticalAlign: "middle",
                            }}
                          />{" "}
                        </span>
                        About{" "}
                      </NavLink>

                      <NavLink
                        to='/projects'
                        className='main-menu-item'
                        style={{ wordSpacing: "10px" }}
                        onClick={() => this.onSetSidebarOpen(false)}
                      >
                        <span className='menu-icon'>
                          <BsCodeSlash
                            className='menu-icon'
                            size={20}
                            style={{
                              color: "#fe883c",
                              verticalAlign: "middle",
                            }}
                          />{" "}
                        </span>
                        Portfolio{" "}
                      </NavLink>

                      <NavLink
                        to='/contact'
                        className='main-menu-item'
                        style={{ wordSpacing: "10px" }}
                        onClick={() => this.onSetSidebarOpen(false)}
                      >
                        {" "}
                        <span className='menu-icon'>
                          <BsEnvelope
                            className='menu-icon'
                            size={20}
                            style={{
                              color: "#fe883c",
                              verticalAlign: "middle",
                            }}
                          />{" "}
                        </span>
                        Contact{" "}
                      </NavLink>
                    </div>
                  }
                  open={this.state.sidebarOpen}
                  onSetOpen={this.onSetSidebarOpen}
                  styles={{
                    root: { position: undefined },
                    content: { position: undefined, display: "block" },
                    sidebar: {
                      backgroundColor: "#232640",
                      height: "500px",
                      borderBottomRightRadius: "50px",
                    },
                  }}
                >
                  <BiMenuAltLeft
                    id='menu-btn'
                    size={40}
                    onClick={() => this.onSetSidebarOpen(true)}
                  />
                </Sidebar>
              </div>
              <div id='middle-column'>
                <h1 id='nav-header'>
                  {" "}
                  <span id='d'>DANIEL</span> PILLAY
                </h1>
              </div>

              <div id='right-column'>
                <DarkMode />
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/about' component={About} />
            <Route exact path='/post/:slug' component={SinglePost} />
            <Route exact path='/blog' component={Post} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
