import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

if (module && module.hot) {
  console.log(`hot reload`);
  module.hot.accept();
}

ReactDOM.render(<App name='michael' age={25} />, document.querySelector('#root'));
