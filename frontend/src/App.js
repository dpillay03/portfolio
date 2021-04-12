import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import SinglePost from './components/SinglePost';
import Post from './components/Post';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Projects} path='/projects' />
            <Route component={SinglePost} path='/post/:slug' />
            <Route component={Post} path='/post'/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}
 