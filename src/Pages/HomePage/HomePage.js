import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Footer/Nav/Nav';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Familytree from '../FamilyTree/FamilyTree';
import Review from '../Review/Review';

const Homepage = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <About />
            <Familytree />
            <Review />
            <Footer />
        </div>
    );
};

export default Homepage;