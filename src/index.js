import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter basename='/fetch-music/'>
    <App />

  </BrowserRouter>
);


