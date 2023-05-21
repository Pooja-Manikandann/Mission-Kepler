import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrateRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = hydrateRoot(container, <App />)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.hydrate(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.hydrate(<App />, document.getElementById('root'));
// ReactDOM.hydrateRoot(<App />);
