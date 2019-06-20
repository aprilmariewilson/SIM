import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = (props) => {
    return (
        <Link className="cardLink" to={props.link} key={props.id}>
        <div className="card cardsCSS">
            <div className="card-body cardCSS">
                <h4 className="card-title">Title of item{props.name}: {props.id}</h4>
                <h6 className="card-subtitle mb-2">Sku:{props.title}{props.sku}</h6>
                <h6 className="card-subtitle mb-2"> Qty:{props.qtyTitle}{props.qty}</h6>
                <p className="card-text">Message:{props.messageTitle} {props.message}</p>
            </div>
        </div>
    </Link>
    );
};
export default Card