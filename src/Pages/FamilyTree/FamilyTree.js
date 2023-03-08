import React from 'react';
import image from '../../Assets/tree.png'

const Familytree = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl mb-5 font-semibold md:my-20'>Build Your <span className='text-indigo-500'>Clantree</span></h1>
            <img src={image} className="w-full md:w-8/12 mx-auto" alt="" />
        </div>
    );
};

export default Familytree;