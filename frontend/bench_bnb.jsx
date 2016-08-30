import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {
//   BenchConstants,
//   requestBenches,
//   receiveBenches
// } from './actions/bench_actions';
// import SearchContainer from './components/search_container';
// const Root = ({store}) => (
//   <Provider store={store}>
//     <SearchContainer/>
//   </Provider>
// );

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  window.Store = store;

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
