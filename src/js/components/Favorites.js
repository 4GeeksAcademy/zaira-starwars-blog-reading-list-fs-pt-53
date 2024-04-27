import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
    // Access the favorites state from the context
    const { store } = useContext(Context);
    const { favorites } = store;

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Favorites</h2>
            {favorites.length === 0 ? (
                <p>No favorites selected yet.</p>
            ) : (
                <ul className="list-group">
                    {favorites.map((favorite, index) => (
                        <li key={index} className="list-group-item">
                            {favorite.name} {/* Assuming each favorite has a "name" property */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
