import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/common/root/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@progress/kendo-theme-default/dist/all.css';
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
import 'sweetalert2/src/sweetalert2.scss';

// Redux
import store from '../src/redux/store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
      <Root />
  </Provider>
);