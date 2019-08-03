import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutFooter from './layout/Footer';
import Home from './Home';
import Documentation from './Documentation';

import 'bootstrap/dist/css/bootstrap.css';
import './prism.css';
import './index.css';

const title = 'Dante Patient';
const gh = 'team-dante/Dante-Patient-Swift';
// if using a root url, remove the basename value here and in BrowserRouter
const basename = process.env.REACT_APP_GH_PAGES_PATH ?
  `/${process.env.REACT_APP_GH_PAGES_PATH}` : '';

const Docs = () => {
  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        {/* Begin Routes */}
        <Switch>
            <Route exact path="/" render={() => <Home title={title} gh={gh} />} />
            <Route path="/documentation" component={Documentation} />
        </Switch>
        {/* End Routes */}
        <LayoutFooter gh={gh} />
      </div>
    </BrowserRouter>
  );
};

export default Docs;
