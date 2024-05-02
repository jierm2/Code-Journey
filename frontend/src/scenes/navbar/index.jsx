import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AvatarBox from '../avatar/avatar';

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => setIsExpanded(!isExpanded);

    const logoutUser = () => {
        logout();
        // setRedirect(true);
    };



    const guestLinks = (
        <Fragment>
        </Fragment>
    );

    const authLinks = (
      <button className='nav-link text-red-500' onClick={logoutUser}>Logout</button>
    );


    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG4RZLQCCvYzUOzCLUpTWsSgLYhZJwhfxbw&usqp=CAU" className="h-8" alt="Code Journey Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Code Journey</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={toggleExpansion}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className={`${isExpanded ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:p-0 md:bg-white dark:bg-gray-800 ">
                        
                        
                        <li>
                            <Link to="/" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/sandbox" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Sandbox</Link>
                        </li>
                        <li>
                            <Link to="/map" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Map</Link>
                        </li>
                        <li>
                            <Link to='/login' className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Login</Link>
                        </li>
                        <li>
                            <Link to='/signup' className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Sign Up</Link>
                        </li>
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                
                    
                </div>
                <Link to="/personal"><AvatarBox ></AvatarBox></Link>
            </div>
           
        </nav>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
