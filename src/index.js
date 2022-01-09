import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import App from './app';

import './config';

const root = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    root, 
    document.getElementById('app')
);

// TO DO MAIN

// 1. npm run build & webpack configuration
// 2. react-router-dom refresh // *****done
// 3. server side rendering ?
// 4. recoil // *****done
// 5. react hooks deep dive // now! (custom hooks) // *****done
// 6. webpack deep div
// 7. react debugging
// 8. promises & async await important!
// 9. react state deep dive // *****done
// 10. linter & eslint-plugin-react-hooks 
// 11. build url
// 12. mocking // *****done
// 13. deeplinks
// 14. eligibility
// 15. __DEV__ flag for mock
// 16. icons (where from?)
// 17. i18n, l10n, g11n // *****done
// 18. array reduce
// 19. formik
// 20. code split
// 21. style split
// 22. redux split