import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Single = () => {
    const { id } = useParams();
    const [entity, setEntity] = useState(null);

    // Access the addToFavorites action from the context
    const { actions } = useContext(Context);
    const { addToFavorites } = actions;

    useEffect(() => {
        const fetchEntity = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
            const data = await response.json();
            setEntity(data.result);
        };

        fetchEntity();
    }, [id]);

    return (
        <div className="container mt-4">
            {entity ? (
                <div>
                    <h2>{entity.name}</h2>
                    <p><strong>Height:</strong> {entity.height}</p>
                    <p><strong>Mass:</strong> {entity.mass}</p>
                    {/* Add more details about the entity as needed */}

                    <button
                        className="btn btn-outline-primary"
                        onClick={() => addToFavorites(entity)}>Add to Favorites</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Single;
