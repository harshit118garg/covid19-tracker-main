import React, { useState, useEffect } from 'react';
import './covid.css'

function Covid() {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch("https://api.covid19india.org/data.json")
            const data = await res.json();
            console.log(data.statewise[0]);
            setData(data.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <div>
            <div className="top ">
                <h1 className="animated1"><span>🔴</span> LIVE </h1>
                <h1>Covid-19 CORONAVIRUS TRACKER</h1>
            </div>
            <section>
                <ul className="grid-container">
                    <li className="card" style={{ backgroundColor: 'royalblue' }}>
                        <div className="card_main">
                            <p className="card_name"><span>OUR </span> COUNTRY</p>
                            <p className="card_total">INDIA</p>
                        </div>
                    </li>
                    <li className="card" style={{ backgroundColor: '#2F4F4F' }}>
                        <div className="card_main">
                            <p className="card_name"><span>TOTAL </span> RECOVERED</p>
                            <p className="card_total">{data.recovered}</p>
                        </div>
                    </li>
                    <li className="card" style={{ backgroundColor: '#B8860B' }}>
                        <div className="card_main">
                            <p className="card_name"><span>TOTAL </span> CONFIRMED</p>
                            <p className="card_total">{data.confirmed}</p>
                        </div>
                    </li>
                    <li className="card" style={{ backgroundColor: 'orange' }}>
                        <div className="card_main">
                            <p className="card_name"><span>TOTAL </span> DEATHS</p>
                            <p className="card_total">{data.deaths}</p>
                        </div>
                    </li>
                    <li className="card" style={{ backgroundColor: 'green' }}>
                        <div className="card_main">
                            <p className="card_name"><span>TOTAL </span> ACTIVE</p>
                            <p className="card_total">{data.active}</p>
                        </div>
                    </li>
                    <li className="card" style={{ backgroundColor: 'purple' }}>
                        <div className="card_main">
                            <p className="card_name card_small"><span>DATA GETS </span>UPDATED</p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                        </div>
                    </li>
                </ul>
            </section><br />
            <div className="but">
                <a href= "https://ashuajax.github.io/covido" target="_blank">
                    <button className="btn">FOR MORE INFO</button>
                </a>
            </div>
        </div>
    )
}

export default Covid;
