import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import productReducer from './store/reducers/products';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AnonymousFunction from './context/products-context';


ReactDOM.render(
  <React.StrictMode> 
    <AnonymousFunction>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnonymousFunction>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
