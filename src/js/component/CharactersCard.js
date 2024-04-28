import React, { useContext } from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersCard = (props) => {
    const { store, actions } = useContext(Context);
    const likesCharacters = store.likesCharacters;
    const isLiked = (character) =>
        likesCharacters.some((like) => like.uid === character.uid);
    const handleLike = (character) => {
        actions.toggleLikeCharacter(character);
    };
    console.log(likesCharacters)
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <div className="card-upper">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`} className="card-img-top" alt="" />
                </div>
                <div className="card-center">
                    <h5 className="card-title-name">{props.character.name}</h5>
                </div>
                <div className="d-flex p-3 justify-content-between">
                    <div className="d-grid gap-2 d-md-flex">
                    
                        <Link to={`/characters/${props.character.uid}`} className="btn btn-secondary">
                            Learn more
                        </Link>
                    </div>
                    <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                        <button
                            onClick={() => handleLike(props.character)} 
                            className="btn btn-link text-end text-decoration-none pe-5"
                        >
                            {isLiked(props.character) ? (
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