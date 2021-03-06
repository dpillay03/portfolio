import "../src/style/nav.scss";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineCodepen,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Media from "./components/Media";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <div id='main-menu-container'>
          <NavLink to='/' className='main-menu-item'>
            <AiOutlineHome
              className='main-menu-icon'
              size={"25px"}
              cursor={"pointer"}
            />
            Home
          </NavLink>

          <NavLink to='/projects' className='main-menu-item'>
            <AiOutlineCodepen className='main-menu-icon' size={"27px"} />
            Projects
          </NavLink>

          <NavLink to='/blog' className='main-menu-item'>
            <BsPencilSquare className='main-menu-icon' size={"22px"} />
            Blog
          </NavLink>

          <NavLink to='/media' className='main-menu-item'>
            <AiOutlineYoutube className='main-menu-icon' size={"26px"} />
            Media
          </NavLink>

          <NavLink to='/contact' className='main-menu-item'>
            <AiOutlineMail className='main-menu-icon' size={"25px"} />
            Contact
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/post/:slug' component={SinglePost} />
        <Route exact path='/blog' component={Post} />
        <Route exact path='/media' component={Media} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
