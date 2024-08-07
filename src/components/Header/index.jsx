import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <div>
                <h1 className="life-savers-bold">Chester Block Party!</h1>
            </div>

            <nav className="poppins-regular">
                <ul>
                    <NavLink
                        to="/homepage"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#280000" : "#570000",
                                textDecorationLine: "none",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/pictures"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#280000" : "#570000",
                                textDecorationLine: "none",
                            };
                        }}
                    >
                        Pictures
                    </NavLink>
                    <NavLink
                        to="/RSVP"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#280000" : "#570000",
                                textDecorationLine: "none",
                            };
                        }}
                    >
                        RSVP Form
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;