import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Nav from '../components/Nav';

class About extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Hype-gear || About</title>
                </Head>
                <Nav />
                <h2>This is about Hype-gear</h2>
            </div>
        );
    }
}

export default About;
