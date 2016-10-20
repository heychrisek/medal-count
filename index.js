import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import {Provider} from 'react-redux';
import configureStore from './src/store/configure-store';

const store = configureStore();

// exported function will render component into HTML element (based on elementId param) and
// set default sort prop (sortProp param)
const renderMedalCountWithSort = (elementId, sortProp) => {
  return ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(elementId)
  );
}

export default renderMedalCountWithSort;