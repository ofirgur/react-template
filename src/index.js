import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import App from './app';

ReactDOM.render(
    <BrowserRouter basename="/calendar">
        <Link to="/today">Link Today</Link> {/* renders <a href="/calendar/today"></a> */}
        <Route path="/today" component={() => <div>Route Today 1 #</div>} />
        <App />
    </BrowserRouter>, 
    document.getElementById('app')
);

// TO DO

// 1. npm run build & webpack configuration
// 2. react-router-dom refresh
// 3. server side rendering ?
// 4. recoil
// 5. react hooks deep dive
// 6. webpack deep div