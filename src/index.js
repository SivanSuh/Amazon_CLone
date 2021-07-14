import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { ContextProvider } from "./ContextProvider";
import reducer ,{ initializeState } from "./reducer";


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider initializeState={initializeState} reducer={reducer} >
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

