import React from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Server side rendering</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={'/about'}>
          <About />
        </Route>
        <Route path={'/articles'}>
          <Articles />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
