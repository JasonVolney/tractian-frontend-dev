import React, { Component } from 'react'
import { Icon } from '@iconify/react';
import Dashboard from '../pages/Dashboard';
import Equipment from './Equipment';
import Account from '../pages/Account';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const iconStyles = {
    height: '30px',
    width: 'auto',
    color: '#eee',
    textAlign: 'center',
    padding: '4px',
    marginLeft: '0px',
    cursor: 'pointer'   
}

const linkStyles = {
    textDecoration: 'none !important'
}

const sideBar = {   
    background: '#2D3794',
    width: '5rem',
    height: '100vh', 
    letterSpacing: '50px',
    boxShadow: '#626796',
    TextAlign: 'center',
    display: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    paddingTop: '50px'
}

export class SideBar extends Component {
    render() {
        return (
            <Router>
                <nav className="sidebar" style={sideBar}>                
                    <ul>
                        <li>
                            <Link to="/" style={linkStyles} style={{ textDecoration: 'none' }}>
                                <Icon icon="icons8:home" style={iconStyles} /><br />
                                {/* <span style={textStyles}>Home</span> */}
                            </Link>
                        </li>
                    </ul>
                    <br />
                    <ul>
                        <li>
                            <Link to="/account" style={linkStyles} style={{ textDecoration: 'none' }}>
                            <Icon icon="fa-solid:user-cog" style={iconStyles}/><br />
                                {/* <span style={textStyles}>Account</span> */}
                            </Link>
                        </li>
                    </ul>
                    <br />
                    <ul>
                        <li>
                            <Link to="/sensors" style={linkStyles} style={{ textDecoration: 'none' }}>
                                <Icon icon="bi:gear-fill" style={iconStyles} /><br />
                                {/* <span style={textStyles}>Sensors</span> */}
                            </Link>
                        </li>
                    </ul>
                    <br />
                    <ul>
                        <li>
                            <Link to="/dashboard" style={linkStyles} style={{ textDecoration: 'none' }}>
                                <Icon icon="carbon:dashboard-reference" style={iconStyles} /><br />
                                {/* <span style={textStyles}>Dashboard</span> */}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/equipment" exact element={<Equipment />}></Route>
                    <Route path="/account" exact element={<Account />}></Route>
                    <Route path="/dashboard" exact element={<Dashboard />}></Route>
                    {/* <Route path="/" exact element={<Home/>}></Route> */}
                </Routes>
            </Router>
        )
    }
}

export default SideBar
