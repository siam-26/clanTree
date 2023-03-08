import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Footer />
        </div>
    );
};

export default Homepage;