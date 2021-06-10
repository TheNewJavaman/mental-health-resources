import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './assets/fonts.css';
import './index.css';
import Home from './pages/Home';
import Depression from './pages/Depression';
import Anxiety from './pages/Anxiety';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/depression-test' component={Depression} />
        <Route exact path='/anxiety-test' component={Anxiety} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
