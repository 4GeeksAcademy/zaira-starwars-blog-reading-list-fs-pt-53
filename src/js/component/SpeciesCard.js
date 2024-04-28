import React, { useContext } from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SpeciesCard = (props) => { 
    const { store, actions } = useContext(Context);
    const likesSpecies = store.likesSpecies;
    const isLiked = (specie) => 
        likesSpecies.some((like) => like.uid === specie.uid);
    const handleLike = (specie) => {
        actions.toggleLikeSpecie(specie);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <div className="card-upper">
                    <img src={`https://starwars-visualguide.com/assets/img/species/${props.specie.uid}.jpg`} className="card-img-top" alt="" />
                </div>
                <div className="card-center">
                    <h5 className="card-title-name">{props.specie.name}</h5>
                </div>
                <div className="d-flex p-3 justify-content-between">
                    <div className="d-grid gap-2 d-md-flex">
                        <Link to={`/species/${props.specie.uid}`} className="btn btn-secondary">
                            Learn more
                        </Link>
                    </div>
                    <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                        <button
                            onClick={() => handleLike(props.specie)} // Utiliza props.character aquí en lugar de character
                            className="btn btn-link text-end text-decoration-none pe-5"
                        >
                            {isLiked(props.specie) ? (
                                <i className="fas fa-heart"></i>
                            ) : (
                                <i className="far fa-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};