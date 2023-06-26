import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TagProvider from './components/TagContext';

ReactDOM.createRoot(document.getElementById('root')).render(<TagProvider><App/></TagProvider>);
