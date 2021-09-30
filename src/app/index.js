import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '../redux/store';
import Layout from '../layout';

const App = () => {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout />
        </ConnectedRouter>
      </Provider>
    );
};

export default App;