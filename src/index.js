import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reader } from 'components/Reader';
import './index.css';
import publications from 'publications.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reader items={ publications} />
  </React.StrictMode>
);
