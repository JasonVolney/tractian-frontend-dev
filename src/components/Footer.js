import React, { useEffect, useState } from 'react';
import { JSON_API } from '../helpers/Constants';

const btnSensor = {
    marginTop: '100px',
    marginLeft: '0px',
    padding: '30px',
    width: '350px',
    height: '116px',
    background: 'rgba(225, 176, 103, 0.66)',
    verticalAlign: 'center',
    borderRadius: '8px',
    float: 'left',    
    marginBottom: '1rem',
    cursor: 'pointer'
}

const btnStatus = {
    marginTop: '100px',
    marginLeft: '0px',
    padding: '30px',
    width: '350px',
    height: '116px',
    backgroundColor: 'rgba(225, 176, 103, 0.66)',
    verticalAlign: 'center',
    borderRadius: '8px',
    float: 'left',
    cursor: 'pointer'
}

const btnEquipment = {
    marginTop: '100px',
    marginLeft: '0px',
    padding: '30px',
    width: '350px',
    height: '116px',
    background: 'rgba(225, 176, 103, 0.66)',
    verticalAlign: 'center',
    borderRadius: '8px',
    float: 'left',
    cursor: 'pointer'
}

const footerStyles = {
    height: '280px',
    marginLeft: '200px', 
    Bottom: '0px',  
    display: 'flex',
    fontSize: '24px',
}

const txtSpan = {
    color: 'white',
    opacity: '100%'
}

const txtTag = {
    fontSize: '35px'
}

const Footer = () => {
    const [assets, setAssets] = useState(null);        

    useEffect(() => {
        fetch(`${JSON_API}/assets?_page=1&_limit=1`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setAssets(data);
                // setUnits(data);
            });
    }, []);
    return (
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/industrial-1920x296.png'})`, 
        backgroundRepeat: 'no-repeat', filter: 'grayscale(100%)', height: '25%', marginLeft: '80px', marginTop: '0vh' }}>
            {/* <footer> */}
               
            <div style={footerStyles}>
            {assets && assets.map((assets) => (
                <div className="footer" key={assets.id} >
                    <div className="btnSensor" style={btnSensor}>
                        <span style={txtSpan}>Sensor</span>
                        <p style={txtTag}>{assets.sensors}</p>
                    </div>   
                    <div className="btnStatus" style={btnStatus}>
                        <span style={txtSpan}>Status</span>
                        <p style={txtTag}>{assets.status}</p>
                    </div>
                    <div className="btnEquipment" style={btnEquipment}>
                        <span style={txtSpan}>Equipment</span>
                        <p>{assets.name}</p>
                    </div>
                </div>
            ))}
            </div>
            {/* </footer> */}
        </div>
    )
}


export default Footer
