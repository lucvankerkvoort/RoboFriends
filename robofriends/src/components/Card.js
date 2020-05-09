import React from "react";

const Card = (props) => {
  const { name, username, email, id } = props.robot;
  return (
    <div id={id} className="card">
      <img src={`https://robohash.org/${id}`} alt="robots" width="200px" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
