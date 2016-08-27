import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {
  BenchConstants,
  requestBenches,
  receiveBenches
} from './actions/bench_actions';
import {Provider} from 'react-redux';
import BenchIndexContainer from './components/bench_index_container';

const Root = ({store}) => (
  <Provider store={store}>
    <BenchIndexContainer/>
  </Provider>
);
// const Root = ({store}) => {
//   debugger
//   return (
//     <Provider store={store}>
//       <BenchIndexContainer/>
//     </Provider>
//   );
// };

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.requestBenches = requestBenches;
  window.store = store;

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
