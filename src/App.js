import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
//curl braces are used when you import from export by name.
import { About } from './About';
import Home from './Home';
import Content from './Content';




class App extends Component {
  render() {
    return (
      <div>
        <nav >
          <ul >

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/content">Content</Link></li>

          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/content" component={Content} />
        </Switch>
      </div>
    );
  }
}

export default App;
