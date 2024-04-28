import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SingleVehicle } from "./SingleVehicle";

export const SingleSpecie = () => { 
    const { store, actions } = useContext(Context);
    const { uid } = useParams();
    const singleSpecie = store.singleSpecie;

   
    useEffect(() => {
        const fetchSpecieDetails = async () => {
            try {
                const data = await actions.getSpecieDetails(uid);
                setSpecie(data.result.properties);
            } catch (error) {
                console.error("Error al mostrar los detalles de la especie", error);
            }
        };

        fetchSpecieDetails();
    }, [uid, actions]);

    return (
        <div className="container">
            {singleSpecie !== null ? (
                <>
                    <div className="upper-part d-flex">
                        <div className="imagen">
                            <img src={`https://starwars-visualguide.com/assets/img/species/${uid}.jpg`} alt={singleSpecie.properties.name} />
                        </div>
                        <div className="character-sum-up p-3">
                            <h2 className="text-center">{singleSpecie.properties.name}</h2>
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
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Average height: {singleSpecie.properties.average_height}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Designation: {singleSpecie.properties.designation}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Language: {singleSpecie.properties.language}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize">Skin colors: {singleSpecie.properties.skin_colors}</div>
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