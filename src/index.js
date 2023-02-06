import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </Web3ReactProvider>
    </React.StrictMode>

);
