import React, { useState, useRef } from 'react'
import { Icon } from '@iconify/react';
import { DownOutlined } from '@ant-design/icons';
import Dashboard from '../pages/Dashboard';
import Equipment from './Equipment';
import Account from '../pages/Account';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDetectOutsideClick } from "../useDetectOutsideClick";

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

const textStyles = {
    paddingRight: '10px',
    paddingLeft: '10px',
}

const navBar = {   
    background: '#2D3794',
    width: '100%',
    height: '15%',  
    letterSpacing: '5px',
    boxShadow: '#626796',
    TextAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    padding: '15px'
}

const DownOutline = {
    fontWeight: '700',
    color: '#FFFFFF'
}

const style = {
    normal:{
        color: '#FFFFF'
    },
    hover: {
        background: '#333333'
    }
}

function Header() {
    const [ hover, setHover ] = useState(false);
    
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div>
            <header className="header" >              
            <Router>
                <nav className="navbar" style={navBar}>                
                    <ul>
                        <li>
                            <Link to="/" style={linkStyles}>
                                <span> Home</span>                                    
                            </Link>
                        </li>
                    </ul>
                    <br />
                    <ul>
                        <li>                            
                            <span style={textStyles}>Menu</span>
                                <div className='container'>
                                    <div className="menu-container">
                                        <DownOutlined onClick={onClick} className="menu-trigger" style={DownOutline}/>
                                        <nav
                                            ref={dropdownRef}
                                            className={`menu ${isActive ? "active" : "inactive"}`}
                                            >
                                            <ul>
                                                <li
                                                onMouseEnter={()=>{
                                                    setHover(true);
                                                }}
                                                onMouseLeave={()=>{
                                                    setHover(false);
                                                }}
                                                style={{
                                                    ...style.normal,
                                                    ...(hover ? style.hover : null)
                                                }}
                                                >
                                                    <Link to="/account" className='link' style={linkStyles}>Account</Link>
                                                </li>
                                                <li
                                                     onMouseEnter={()=>{
                                                        setHover(true);
                                                    }}
                                                    onMouseLeave={()=>{
                                                        setHover(false);
                                                    }}
                                                    style={{
                                                        ...style.normal,
                                                        ...(hover ? style.hover : null)
                                                    }}
                                                >
                                                    <Link to="/sensors" className='link' style={linkStyles}>Sensors</Link>                                                
                                                </li>
                                                <li
                                                     onMouseEnter={()=>{
                                                        setHover(true);
                                                    }}
                                                    onMouseLeave={()=>{
                                                        setHover(false);
                                                    }}
                                                    style={{
                                                        ...style.normal,
                                                        ...(hover ? style.hover : null)
                                                    }}
                                                >
                                                    <Link to="/dashboard" className='link' style={linkStyles}>Dashboard</Link>                                                                                                
                                                </li>
                                            </ul>
                                            </nav>
                                    </div>
                                </div>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/equipment" exact element={<Equipment />}></Route>
                    <Route path="/account" exact element={<Account />}></Route>
                    <Route path="/dashboard" exact element={<Dashboard />}></Route>
                </Routes>
            </Router>
            </header>
        </div>
    )
}

export default Header
