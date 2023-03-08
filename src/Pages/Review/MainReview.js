import React, { useState } from 'react';
// import people from './data';
import people from './Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';
import './Review.css';

const MainReview = () => {
    const [index, setIndex] = useState(0);
    const { name, live, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        else if (number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }
    return (
        <div className='w-full'>
            <article className="bg-none review  py-10 lg:pb-0 ">
                <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full ">
                        <img src={image} alt={name} />
                    </div>
                </div>
                {/* <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
                <FaQuoteRight />
            </span>
        </div> */}
                <h4 className="author text-2xl text-center">{name}</h4>
                <p className="jon text-center text-base mt-1">{live}</p>
                <div className='flex gap-2 mt-1 justify-evenly'>
                    <div className='mt-3'>
                        <button className="prev-btn" onClick={prevPerson}>
                            <FaChevronLeft />
                        </button>
                    </div>
                    <div className='flex gap-2 mt-1 '>
                        <IoStarSharp className='text-yellow-500 text-3xl ' />
                        <IoStarSharp className='text-yellow-500 text-3xl' />
                        <IoStarSharp className='text-yellow-500 text-3xl ' />
                        <IoStarSharp className='text-yellow-500 text-3xl' />
                        <IoStarSharp className='text-yellow-500 text-3xl' />
                    </div>
                    <div className='mt-3'>
                        <button className="next-btn" onClick={nextPerson}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <p className="info leading-7 pb-6 md:text-xl text-base w-10/12 md:w-5/6 mx-auto mt-5 text-center h-36 overflow-scroll lg:overflow-hidden">{text}</p>

            </article>
        </div>
    )
};


export default MainReview;