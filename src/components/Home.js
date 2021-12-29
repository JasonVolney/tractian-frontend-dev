import React, { useEffect, useState } from 'react'

// import SideBar from './SideBar';
import Sensor from './Sensor';
import { JSON_API } from '../helpers/Constants'

const Home = () => {
    const [assets, setAssets] = useState(null);
    // const [units, setUnits] = useState(null);

    useEffect(() => {
        fetch(`${JSON_API}/assets?_page=1&_limit=20`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                // setUnits(data);
                setAssets(data);
            });
    }, []);

    return (
        <div className="home" >            
            <Sensor/>       
            {/* {assets && <Sensor assets={assets}/>} */}
        </div>
    );
}

export default Home
