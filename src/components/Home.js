import React, { useEffect, useState } from 'react'
import Sensor from './Sensor';
import Header from './Header';
// import SideBar from './SideBar';
import { JSON_API } from '../helpers/Constants'

const Home = () => {
    const [assets, setAssets] = useState(null);
    // const [units, setUnits] = useState(null);

    useEffect(() => {
        fetch(`${JSON_API}/assets`)
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
            <Header/>
            {assets && <Sensor assets={assets}/>}
        </div>
    );
}

export default Home
