import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import { rootReducer, initialRootState } from './redux';
import { GlobalStyle } from './theme';

const store = createStore(
  rootReducer,
  initialRootState,
  composeWithDevTools(applyMiddleware(thunk))
);

const ComposedApp = () => (
  <Provider store={store}>
    <GlobalStyle />
    <App />
    <ToastContainer />
  </Provider>
);

ReactDOM.render(<ComposedApp />, document.getElementById('root'));
