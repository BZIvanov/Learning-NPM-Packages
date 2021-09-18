import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Users from './components/Users';
import Projects from './components/Projects';
import Issues from './components/Issues';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/users' exact component={Users} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/issues' exact component={Issues} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
