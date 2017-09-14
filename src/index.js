import React from 'react';
import ReactDOM from 'react-dom';
import '@appbaseio/reactivesearch/dist/css/style.min.css';
import 'materialize-css/dist/css/materialize.min.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
