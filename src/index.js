import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/fonts.css';
import './index.css';
import Home from './pages/Home';
import Depression from './pages/Depression';
import reportWebVitals from './reportWebVitals';

let baseUrl = 'mental-health-resources'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/depression-test' component={Depression} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
