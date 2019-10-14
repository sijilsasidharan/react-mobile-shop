import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from "./components/ProductProvider";
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <ProductProvider>
    <Router>
        <App />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);
