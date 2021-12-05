import React from 'react'
import SideBar from './SideBar'

const headerStyles = {    
    width: '100%',
    height: '50px',
    background: 'white',
    color: 'rgba(0, 0, 0, 0.51)',
    position: 'fixed'

}

const homeStyles = { 
    color: 'rgba(0, 0, 0, 0.51)'
}

function Header() {
    return (
        <div style={headerStyles}>
            <header className="header" >              
            <h2 style={homeStyles}>Datasheet</h2>
                <SideBar/>
            </header>
        </div>
    )
}

export default Header
