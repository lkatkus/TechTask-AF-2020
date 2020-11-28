import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const ComposedApp = () => (
  <React.Fragment>
    <App />
  </React.Fragment>
);

ReactDOM.render(<ComposedApp />, document.getElementById('root'));
