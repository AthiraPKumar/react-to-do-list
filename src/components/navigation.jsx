import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <NavLink className="mr-2" to="/">TodoList</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </div>
    );

};

export default Navigation;