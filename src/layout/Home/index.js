import React from 'react';
import { Link } from 'react-router-dom'; 

const Home = () => {
    return (
        <div>
            <h1>App Layout</h1>
            <Link to="/example">link to /example</Link>
        </div>
    );
};

export default Home;