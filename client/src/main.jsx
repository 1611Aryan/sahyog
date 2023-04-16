import { Global, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        #root {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>
);
