import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();
    const singleCharacter = store.singleCharacter;


    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const data = await actions.getCharacterDetails(uid);
                setCharacter(data.result.properties);
            } catch (error) {
                console.error("Error al mostrar los detalles del personaje", error);
            }
        };

        fetchCharacterDetails();
    }, [uid, actions]);

    return (
        <div className="container">
            {singleCharacter !== null ? (
                <>
                    <div className="upper-part d-flex">
                        <div className="imagen">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={singleCharacter.properties.name} />
                        </div>
                        <div className="character-sum-up p-3">
                            <h2 className="text-center">{singleCharacter.properties.name}</h2>
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
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize ">Eye color:{singleCharacter.properties.eye_color}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize ">Hair color:{singleCharacter.properties.hair_color}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize ">Gender:{singleCharacter.properties.gender}</div>
                            <div className="col badge bg-dark text-wrap fs-5 text-capitalize ">Height:{singleCharacter.properties.height}</div>
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