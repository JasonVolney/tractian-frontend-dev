import React, { useEffect, useState } from 'react';
import { JSON_API } from '../helpers/Constants';
import styles from "../App.css";
import { Icon } from '@iconify/react';

const btnSensor = {
    marginTop: '100px',
    marginLeft: '0px',
    padding: '30px',
    width: '350px',
    height: '116px',
    backgroundColor: '#E1B067',
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
    backgroundColor: '#E1B067',
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
    backgroundColor: '#E1B067',
    verticalAlign: 'center',
    borderRadius: '8px',
    float: 'left',
    cursor: 'pointer'
}

const footerStyles = {
    height: '280px',
    width: '100%',
    marginLeft: '200px', 
    MarginBottom: '0px',  
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

const iconStyles = {
    height: '55px',
    width: 'auto',
    color: '#eee',
    textAlign: 'center',
    padding: '4px',
    marginLeft: '0px',
    cursor: 'pointer'   
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
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/industrial-1920x296.png'})`, 
        backgroundRepeat: 'no-repeat', filter: 'grayscale(100%)', height: '25%', marginLeft: '80px', marginTop: '0vh', marginBottom: '0vh' }}>
            {/* <footer> */}
               
            <div style={footerStyles}>
            {assets && assets.map((assets) => (
                <div className="footer" key={assets.id} >
                    <div className="btnSensor" style={btnSensor}>
                        <span style={txtSpan}>Sensor</span>
                        <p style={txtTag}>{assets.sensors}</p>
                        <Icon icon="emojione:antenna-bars" style={iconStyles} />
                    </div>   
                    <div className="btnStatus" style={styles.btnStatus}>
                        <span style={txtSpan}>Status</span>
                        <p style={txtTag}>{assets.status}</p>
                        <Icon icon="emojione-v1:warning" style={iconStyles} />
                    </div>
                    <div className="btnEquipment" style={btnEquipment}>
                        <span style={txtSpan}>Equipment</span>
                        <p style={txtTag}>{assets.name}</p>
                        <Icon icon="tabler:windmill" style={iconStyles} />
                    </div>
                </div>
            ))}
            </div>
            {/* </footer> */}
        </div>
    )
}


export default Footer
