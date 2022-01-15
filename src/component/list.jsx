import React from "react";

const List = (props) => {
  const { recovered, confirmed, deaths, active, lastupdatedtime } = props.data;
  return (
    <>
      <li className="card" style={{ backgroundColor: "royalblue" }}>
        <div className="card_main">
          <p className="card_name">
            <span>OUR </span> COUNTRY
          </p>
          <p className="card_total">INDIA</p>
        </div>
      </li>
      <li className="card" style={{ backgroundColor: "#2F4F4F" }}>
        <div className="card_main">
          <p className="card_name">
            <span>TOTAL </span> RECOVERED
          </p>
          <p className="card_total">{recovered}</p>
        </div>
      </li>
      <li className="card" style={{ backgroundColor: "#B8860B" }}>
        <div className="card_main">
          <p className="card_name">
            <span>TOTAL </span> CONFIRMED
          </p>
          <p className="card_total">{confirmed}</p>
        </div>
      </li>
      <li className="card" style={{ backgroundColor: "orange" }}>
        <div className="card_main">
          <p className="card_name">
            <span>TOTAL </span> DEATHS
          </p>
          <p className="card_total">{deaths}</p>
        </div>
      </li>
      <li className="card" style={{ backgroundColor: "green" }}>
        <div className="card_main">
          <p className="card_name">
            <span>TOTAL </span> ACTIVE
          </p>
          <p className="card_total">{active}</p>
        </div>
      </li>
      <li className="card" style={{ backgroundColor: "purple" }}>
        <div className="card_main">
          <p className="card_name card_small">
            <span>DATA GETS </span>UPDATED
          </p>
          <p className="card_total card_small">{lastupdatedtime}</p>
        </div>
      </li>
    </>
  );
};

export default List;
