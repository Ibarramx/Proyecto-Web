import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/layout/app/App';
import '@progress/kendo-theme-default/dist/all.css';
import "react-datepicker/dist/react-datepicker.css";

// Redux
import store from '../src/redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);