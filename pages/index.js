import React from 'react';
import Head from 'next/head';

import Nav from '../components/Nav';

const Home = () => (
    <div>
        <Head>
            <title>Hype-gear || Home</title>
        </Head>
        <Nav />
        <div className="hero">
            <h1 className="title">Welcome to Hype-gear!</h1>
        </div>
    </div>
);

export default Home;
