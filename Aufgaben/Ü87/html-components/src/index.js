import React from 'react';
import ReactDOM from 'react-dom';
import Header, { Clock } from './header';
import Main from './main';
import Counter from './counter';
import Footer from './footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Clock />
    <Main />
    <Counter />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
