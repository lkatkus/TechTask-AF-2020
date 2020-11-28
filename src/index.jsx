import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import App from './App';
import { rootReducer, initialRootState } from './redux';

const store = createStore(
  rootReducer,
  initialRootState,
  composeWithDevTools(applyMiddleware(thunk))
);

const ComposedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ComposedApp />, document.getElementById('root'));
