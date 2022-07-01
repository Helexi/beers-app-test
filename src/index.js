import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataBeer } from './components/CardList/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataBeer>
      <App />
    </DataBeer>
  </React.StrictMode>
);

reportWebVitals();
