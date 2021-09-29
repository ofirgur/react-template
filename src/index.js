import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './redux/store';
import App from './app';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('app')
);

// TO DO

// 1. npm run build & webpack configuration
// 2. react-router-dom refresh
// 3. server side rendering ?
// 4. recoil
// 5. react hooks deep dive // now! (custom hooks)
// 6. webpack deep div
// 7. react debugging
// 8. promises & async await
// 9. react state deep dive
// 10. linter & eslint-plugin-react-hooks 
// 11. 
// 12. 