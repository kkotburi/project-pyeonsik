import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
window.Kakao.isInitialized();

if (process.env.NODE_ENV === 'production') {
  console = window.console || {};
  console.log = function no_console() {};
  console.warn = function no_console() {};
  console.error = function () {};
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
