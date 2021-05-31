import React from "react";
import "./card.styles.css";

export const Card = ({ monster: { id, name, email } }) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}`} alt='monster' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
