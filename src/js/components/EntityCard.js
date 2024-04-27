import React from 'react';
import PropTypes from 'prop-types';

const EntityCard = ({ entity, onDetailsClick, onAddToFavorites }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{entity.name}</h5>
                <p className="card-text">{/* Add other details here */}</p>
                <button className="btn btn-primary" onClick={() => onDetailsClick(entity)}>Details</button>
                <button className="btn btn-secondary" onClick={() => onAddToFavorites(entity)}>Add to Favorites</button>
            </div>
        </div>
    );
};

EntityCard.propTypes = {
    entity: PropTypes.object.isRequired,
    onDetailsClick: PropTypes.func.isRequired,
    onAddToFavorites: PropTypes.func.isRequired
};

export default EntityCard;
