import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import EntityCard from "../components/EntityCard";
import EntitySlider from '../components/EntitySlider'; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

 
const Home = () => {
    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);

    // Access the addToFavorites action from the context
    const { actions } = useContext(Context);
    const { addToFavorites } = actions;

    useEffect(() => {
        const fetchPeople = async () => {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();
            setPeople(data.results);
        };

        const fetchVehicles = async () => {
            const response = await fetch("https://www.swapi.tech/api/vehicles");
            const data = await response.json();
            setVehicles(data.results);
        };

        const fetchPlanets = async () => {
            const response = await fetch("https://www.swapi.tech/api/planets");
            const data = await response.json();
            setPlanets(data.results);
        };

        fetchPeople();
        fetchVehicles();
        fetchPlanets();
    }, []);

	const handleDetailsClick = (entity) => {
        const navigate = useNavigate();
    	navigate(`/single/${entity.id}`);
    };

    return (
        <div className="container mt-4">
            <h2>People</h2>
            <div className="row">
                {people.map((person, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <EntityCard
                            entity={person}
                            onDetailsClick={handleDetailsClick}
                            onAddToFavorites={addToFavorites}
                        />
                    </div>
                ))}
            </div>

            <h2 className="mt-4">Vehicles</h2>
            <div className="row">
                {vehicles.map((vehicle, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <EntityCard
                            entity={vehicle}
                            onDetailsClick={handleDetailsClick}
                            onAddToFavorites={addToFavorites}
                        />
                    </div>
                ))}
            </div>

            <h2 className="mt-4">Planets</h2>
            <div className="row">
                {planets.map((planet, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <EntityCard
                            entity={planet}
                            onDetailsClick={handleDetailsClick}
                            onAddToFavorites={addToFavorites}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;