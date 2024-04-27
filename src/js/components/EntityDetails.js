import React from "react";
import { Link } from "react-router-dom";

const EntityCard = ({ entity }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{entity.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`/single/${entity.id}`} className="btn btn-primary">Details</Link>
            </div>
        </div>
    );
};

export default EntityCard;
