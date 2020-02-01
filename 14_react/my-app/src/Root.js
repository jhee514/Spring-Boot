import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import App from './App';

const Root = () => (
  <BrowserRouter>
  <Route component={Home} path={['/:username', '/home']} exact />
  <App />
  </BrowserRouter>
);

export default Root;