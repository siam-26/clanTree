import React from 'react';
import MainReview from './MainReview';


const Review = () => {
    return (
        <main className='md:mt-16 mt-5 flex justify-center mx-auto w-11/12  rounded-3xl lg:mb-16'>
            <section className="container">
                <div children="title">
                    <h2 className='text-3xl md:text-3xl lg:text-4xl font-semibold text-center pt-10'>What Our <span className="text-indigo-600">Users Says</span> </h2>
                    <p className='w-full lg:w-8/12 text-center mx-auto mt-5 px-3 md:px-5 text-xl md:text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores.</p>
                    <div className="underline"></div>
                </div>
                <div className='mx-auto w-full md:w-9/12 mt-6 pb-10 lg:pb-0 py-7 rounded-xl'>
                    <MainReview></MainReview>
                </div>
            </section>
        </main>
    );
};

export default Review;