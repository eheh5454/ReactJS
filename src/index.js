import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// 여기서 모든 요소를 그린다.
// 렌더에는 하나의 js만 들어갈 수있다!!
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 