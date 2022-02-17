import React from 'react';
import styled from 'styled-components';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Switch, Route, Link } from 'react-router-dom';

const BigGreenHeading = styled.h1`
  color: green;
  font-size: 50px;
`;

const App = () => {
  return (
    <>
      <BigGreenHeading>Server side rendering</BigGreenHeading>
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
    </>
  );
};

export default App;
