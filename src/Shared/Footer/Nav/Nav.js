import React from 'react';
import './Nav.css'
import { FiMenu } from 'react-icons/fi';

const Nav = () => {
    return (
        <div className="navbar px-7 w-full md:w-11/12 mx-auto">
            <a className=" normal-case text-3xl font-bold">Clantree</a>
            <div className="navbar-end ml-auto">
                <div className="dropdown ">
                    <label tabIndex={0} className=" lg:hidden ">
                        <FiMenu className="text-2xl" />
                    </label>
                    {/* Small Device */}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                        <li><a className="btn btn-color-style">Get started</a></li>
                    </ul>
                </div>
                <a className="hidden md:block normal-case text-3xl font-bold">Clantree</a>
            </div>

            {/* Large Device */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold ul-style">
                    <li className="li-style"><a className="noo-hover link-style">Item 1</a></li>
                    <li className="li-style"><a className="noo-hover link-style">Item 2</a></li>
                    <li className="li-style"><a className="noo-hover link-style">Item 3</a></li>
                    <li className="li-style"><a className="noo-hover link-style">Item 3</a></li>
                    <div className="animation start-home"></div>
                </ul>
            </div>
            <div className="navbar-end hidden md:block">
                <a className="btn btn-color-style">Get started</a>
            </div>
        </div>
    );
};

export default Nav;