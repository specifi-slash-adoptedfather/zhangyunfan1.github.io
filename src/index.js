import React from 'react';
import ReactDOM from 'react-dom/client'; // 确保使用 react-dom/client
import App from './App';
import './index.css';

// 使用 ReactDOM.createRoot 来替代 ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
