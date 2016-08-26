import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {
  BenchConstants,
  requestBenches,
  receiveBenches
} from './actions/bench_actions';


document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  window.requestBenches = requestBenches;

  // let store = configureStore()
  ReactDOM.render(<p>I beat html Text</p>, document.getElementById('root'));
});
