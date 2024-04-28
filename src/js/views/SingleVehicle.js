import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();
    const singleVehicle = store.singleVehicle;
   

    useEffect(() => {
        const fetchVehicleDetails = async () => {
            try {
                const data = await actions.getVehiclesDetails(uid);
                setVehicle(data.result.properties);
            } catch (error) {
                console.error("Error al mostrar los detalles del personaje", error);
            }
        };

        fetchVehicleDetails();
    }, [uid, actions]);

    return (
        <div className="container">
            {singleVehicle !== null ? (
                <>
                    <div className="upper-part d-flex">
                        <div className="imagen">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} alt={singleVehicle.properties.name} />
                        </div>
                        <div className="Vehicle-sum-up p-3">
                            <h2 className="text-center">{singleVehicle.properties.name}</h2>
                            <p className="d-flex justify-content-center text-center p-3 fw-bolder lh-base">
                            Star Wars traducido al español como La Guerra de las Galaxias, es una franquicia compuesta de películas, novelas, cómics, videojuegos y juguetes . Es un universo de ficción creado por George Lucas. La historia de Star Warzzz utiliza arquetipos comunes a la ciencia ficción,
                            climax político y mitología, así como temas musicales de estos aspectos.
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr></hr>
                    <div className="bottom-part">
                        <div className="row">
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Cargo capacity: {singleVehicle.properties.cargo_capacity}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Manufacturer: {singleVehicle.properties.manufacturer}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Crew: {singleVehicle.properties.crew}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Model: {singleVehicle.properties.model}</div>
                        </div>
                    </div>
                </>
            ) : (
                <h3>Loading...</h3>
            )}
            <hr></hr>
            <Link to="/">
                <span className="btn btn-primary btn-md" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};