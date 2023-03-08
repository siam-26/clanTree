import React from 'react';
import img1 from '../../Assets/Group 5.png'

const Banner = () => {
    return (
        <div className=''>
            <div className='flex flex-col-reverse md:flex-row md:justify-center lg:flex-row lg:justify-center mx-auto w-11/12 rounded-3xl'>
                <div className='mx-auto w-full md:w-7/12 lg:w-7/12 md:py-24 lg:py-24 text-center md:text-left'>
                    <h1 className=' font-semibold text-3xl md:text-3xl lg:text-5xl lg:leading-tight'><span className="text-indigo-600">Showcase your</span> Clan Families <br className='hidden md:block' /> with ClanTree</h1>
                    <p className='mt-5 text-lg lg:mt-8 pb-5 lg:pb-0 w-full lg:w-5/6 lg:leading-9'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident saepe suscipit distinctio unde tempora libero, quasi mollitia inventore sit, eum magni veritatis eligendi magnam ea corrupti, est quis nihil ipsam!</p>
                </div>

                <div className='w-5/6 md:w-3/6 lg:w-2/6 mx-auto pb-8 lg:pb-0 '>
                    <img className='full' src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;