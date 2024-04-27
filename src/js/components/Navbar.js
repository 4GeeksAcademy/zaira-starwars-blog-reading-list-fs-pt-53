import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    // Access the context to get the favorites array
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Function to handle removing a favorite item
    const handleRemoveFavorite = (item) => {
        actions.removeFromFavorites(item);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Star Wars Databank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn" onClick={toggleDropdown}>
                                Favorites ({favorites.length})
                            </button>
                            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                                {favorites.map((item, index) => (
                                    <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                        {item.name}
                                        <button className="btn btn-link" onClick={() => handleRemoveFavorite(item)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;