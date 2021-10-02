import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./redux/store";

import Layout from './comps/Layout';
import Dashboard from './dash/Dashboard';
import Homepage from './home/Homepage';
import Error404 from './Error404';
import TempPage from './temp/TempPage'
import TcsofService from './legal/TcsofService'
import PrivacyPolicy from './legal/PrivacyPolicy'

const App: FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/terms-and-conditions" component={TcsofService} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/404" component={Error404} />
            <Route exact path="/temp" component={TempPage} />
            <Route path="/app" component={Dashboard} />
            <Redirect to="/404" />

          </Switch>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
};

export default App;
