import React from "react";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import SinglePost from "../modules/SinglePost";
import Post from "./Post";
import Contact from "./Contact";

export default class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id='main-menu'>
          <NavLink to='/'>Home </NavLink>

          <NavLink to='/about'>About </NavLink>

          <NavLink to='/projects'>Portfolio </NavLink>

          {/* <NavLink to='/blog'>Blog </NavLink> */}

          <NavLink to='/contact'>Contact</NavLink>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog/:slug' component={SinglePost} />
          <Route exact path='/blog' component={Post} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}
