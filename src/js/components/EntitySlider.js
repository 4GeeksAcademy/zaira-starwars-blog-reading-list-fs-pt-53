// EntitySlider.js

import React, { useState } from 'react';
import EntityCard from './EntityCard'; // Import the EntityCard component
import '../../styles/entitySlider.css'; // Import the styles for the EntitySlider

const EntitySlider = ({ entities }) => {
    return (
        <div className="entity-slider">
            <div className="entity-slider-container">
                {entities.map((entity, index) => (
                    <EntityCard key={index} entity={entity} />
                ))}
            </div>
        </div>
    );
};

export default EntitySlider;