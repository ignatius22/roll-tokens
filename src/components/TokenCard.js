import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ name, logo, id, symbol }) => (
  <div className="tc grow bg-navy br3 pa2 ma3 dib bw2 shadow-3 con">
    <Link to={`/${id}`}>
      <img alt="token" src={logo} />
    </Link>
    <div className="details">
      <h3>{name}</h3>
      <h6>{symbol}</h6>
      <button

        >add favourites
      </button>
    </div>
  </div>
);


export default Card;
