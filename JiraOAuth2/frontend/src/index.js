import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Users from './components/Users';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/users' exact component={Users} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
