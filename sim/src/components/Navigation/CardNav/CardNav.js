import React from 'react';
import {Link } from 'react-router-dom';

import NavBtn from '../NavBtn/NavBtn';

const CardNav = (props) => (

    <div className='subLinks'>
    <NavBtn>
    <Link className="linkStyle" 
    to="/inventory/receiving"
    >Receiving</Link>
    </NavBtn>
    <NavBtn>
        <Link className="linkStyle" 
        to="/inventory">Current</Link>
        </NavBtn>
        <NavBtn>
        <Link className="linkStyle" 
        to="/inventory/history" 
        >History</Link>
        </NavBtn>

    </div>

);

export default CardNav