import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HoroscopeContext } from './context/HoroscopeContext';
import { HoroscopeProvider } from './context/HoroscopeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HoroscopeProvider value={{ sign: 'Leo' }}>
      <App />
    </HoroscopeProvider>
  </React.StrictMode>
);
