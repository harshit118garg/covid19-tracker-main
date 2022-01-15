import React, { useState, useEffect } from "react";
import "./covid.css";
import List from "./list";

function Covid() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const data = await res.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div>
        <div className="top ">
          <h1 className="animated1">
            <span>🔴</span> LIVE
          </h1>
          <h1>Covid-19 CORONAVIRUS TRACKER</h1>
        </div>
        <section>
          <ul className="grid-container">
            <List data={data} />
          </ul>
        </section>
        <br />
        <div className="but">
          <a href="https://ashuajax.github.io/covido" target="_blank">
            <button className="btn">FOR MORE INFO</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Covid;
