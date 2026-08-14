import React from 'react';
import HeroHome from './HeroHome';
import Awards from './Award';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Stats from './Stats';

function HomePage() {
    return ( 
        <>
            <HeroHome />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;