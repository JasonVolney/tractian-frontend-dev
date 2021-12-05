import React, { useEffect, useState } from 'react'
import { JSON_API } from '../helpers/Constants'

const imgStyles = {
    with: '200px',
    height: 'auto',
    marginLeft: '200px',
    borderRadius: '10px',
    background: '#C4C4C4', 
    filter: 'grayscale(100%)',
    display: 'flexbox'
}

const textStyles = {
    width: '560px',
    fontSize: '24px',
    color: '#000',
    marginLeft: '0px',
    paddingTop: '0px',
    textAlign: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const titleStyles = {
    width: '560px',
    fontSize: '24px',
    color: '#000',
    paddingTop: '80px',
    marginLeft: '65px',
    textAlign: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const viewStyles = {
    height: '100px',
    borderRadius: '10px',
    background: '#f1f1f1',
    textAlign: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const datasheetStyles = {
    height: 'auto',
    borderRadius: '10px',
    background: '#f1f1f1', 
    textAlign: 'justify-all',
    padding:'35px',
    verticalAlign: 'center',
    justifyContent: 'center'
}


const Sensor = () => {    
        const [assets, setAssets] = useState(null);
        const [units, setUnits] = useState(null);   
        const [companies, setCompanies] = useState(null);        
        
            useEffect(() => {
                fetch(`${JSON_API}/assets?_page=1&_limit=1`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        setAssets(data);
                    });
            }, []);

            useEffect(() => {
                fetch(`${JSON_API}/units?_page=1&_limit=1`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        setUnits(data);
                    });
            }, []);   
            
            useEffect(() => {
                fetch(`${JSON_API}/companies?_page=1&_limit=1`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        setCompanies(data);
                    });
            }, []);

        return (
            <section>
            {companies && companies.map((companies) => (          
            <p style={titleStyles}>Company: {companies.name}</p>
            ))}
            {units && units.map((units) => (
                <div className="View" key={units.id} style={viewStyles}>
                <p>{units.name}</p>
            </div>
            ))}
            <p style={textStyles}>Specifications: </p>
            {assets && assets.map((assets) => (
            <div className="DataSheet" key={assets.id} style={datasheetStyles}>
                <ul>
                    <li><p>Speed Rotation: </p>{assets.specifications.rpm}<span> RPM</span></li><br/>
                    <li><p>Temperature Max: </p>{assets.specifications.maxTemp}<span> °F</span></li><br/>
                    <li><p>Power: </p>{assets.specifications.power}<span> kW</span></li><br/>
                    <li><p>Health Score: </p>{assets.healthscore}<span>%</span></li><br/>
                    <li><p>Total Collects Uptime: </p>{assets.metrics.totalCollectsUptime}<span> hours</span></li><br/>
                    <li><p>Total Uptime: </p>{assets.metrics.totalUptime}<span> hours</span></li><br/>
                    <li><p>Last Uptime At: </p>{assets.metrics.lastUptimeAt}<span>datetime</span></li><br/>
                </ul>
            </div>
            ))}             
            <article>
            {assets && assets.map((assets) => (
            <div className="container" key={assets.id}>
                <img src={assets.image} className="Images" alt="images" style={imgStyles}/><br/>                
            </div>
                ))}        
            </article>
            <br/>     
        </section>
        )    
}

export default Sensor;
