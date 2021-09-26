import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* Navbar section  */}
            <div className="nav-container container justify-content-between d-flex">
                <div className="logo-section">
                    <h2>Tech Seminar</h2>
                </div>
                <div className="menu-section">
                    <a href="./speaker">Speaker</a>
                    <a href="./ticket">Ticket</a>
                    <a href="./location">Location</a>
                    <a href="./info">Info</a>
                    <button>Start Now</button>
                </div>
            </div>
            {/* Hero Section  */}
            <div className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 hero-left d-flex justify-content-center">

                            
                            <p>5 and 6 <br /> October 2021</p>
                            

                        </div>
                        <div className="col-lg-6 hero-right py-4">
                            <h1 className="text-center mt-4 hero-text">Make A Guest List for <br /> Tech Seminar </h1>
                            <h4 className="text-center hero-text">These Persons are doing Excellent Job in Online Platform to Teach People About Programming, Math, Science in an Excellent Way. So, A Online Seminar will be Organized with these People </h4>
                            <h2 className="text-center mt-3 hero-text">Total Budget $10000</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;