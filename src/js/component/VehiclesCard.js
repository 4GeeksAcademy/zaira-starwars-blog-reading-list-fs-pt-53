import React, { useContext } from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesCard = (props) => {
    const { store, actions } = useContext(Context);
    const likesVehicles = store.likesVehicles;
    const isLiked = (vehicle) =>
        likesVehicles.some((like) => like.uid === vehicle.uid);
    const handleLike = (vehicle) => {
        actions.toggleLikeVehicles(vehicle);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <div className="card-upper">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicle.uid}.jpg`} className="card-img-top" alt="" />
                </div>
                <div className="card-center">
                    <h5 className="card-title-name">{props.vehicle.name}</h5>
                </div>
                <div className="d-flex p-3 justify-content-between">
                    <div className="d-grid gap-2 d-md-flex">
                        <Link to={`/vehicles/${props.vehicle.uid}`} className="btn btn-secondary">
                            Learn more
                        </Link>
                    </div>
                    <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                        <button
                            onClick={() => handleLike(props.vehicle)} 
                            className="btn btn-link text-end text-decoration-none pe-5"
                        >
                            {isLiked(props.vehicle) ? (
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