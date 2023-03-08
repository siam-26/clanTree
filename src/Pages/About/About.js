import React from 'react';
import family from '../../Assets/family.png'
import './About.css'

const About = () => {
    return (
        <div className='py-20 mt-16 md:mt-[100px]'>
            <div className='flex flex-col md:flex-row items-center div-styles md:h-60 md:pl-20 mx-5 md:w-10/12 md:mx-auto rounded-3xl pb-10 px-2 md:py-36'>
                <div className='w-full md:w-4/12 mx-10'><img src={family} alt="" className='w-full relative bottom-20 md:bottom-11' /></div>
                <div className='w-full md:w-6/12'>
                    <h1 className='text-3xl md:text-4xl mb-5 mt-[-50px] font-semibold'>What is <span className='text-indigo-500'>Clantree</span></h1>
                    <p className='text-lg text-slate-700 px-1 md:px-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe impedit quo assumenda ipsum odio nisi neque cum, perferendis exercitationem mollitia possimus. Quasi quas rem voluptatibus animi reiciendis, tempora ipsum.</p>
                </div>
            </div>

        </div>
    );
};

export default About;