import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavBtn from './NavBtn/NavBtn';
import './Navbar.css'

class Navbar extends Component{
    render(){
       return(
            <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/"><h1>Simple Inventory Manager</h1></a>

            <div className="navLinks">
            <NavBtn className="link"><Link className="linkStyle" to="/inventory">Inventory</Link></NavBtn>
        
            <NavBtn className="link"><Link className="linkStyle" to="/production">Production</Link></NavBtn>
        
            <NavBtn className="link"><Link className="linkStyle" to="/shipping">Shipping</Link></NavBtn>
            
            <NavBtn className="link"><Link className="linkStyle" to="/admin">Admin</Link></NavBtn>
        </div>
        <NavBtn className="link"><Link className="linkStyle" to="/" onClick={this.props.logout}>Logout</Link></NavBtn>

            </nav>
        );
    };
};

export default Navbar;