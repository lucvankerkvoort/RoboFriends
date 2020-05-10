import React from "react";

const Card = ({ robots }) => {
  return (
    <div className="card-section">
      {robots.map((user, i) => {
        const { id, name, email } = user;
        return (
          <div id={id} className="card">
            <img
              src={`https://robohash.org/${id}`}
              alt="robots"
              width="200px"
            />
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
