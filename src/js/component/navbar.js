import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const sumLikes = store.likesCharacters.length + store.likesVehicles.length + store.likesSpecies.length

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<a className="navbar-brand p-2" href="#">
					<img src="https://www.freepnglogos.com/uploads/star-wars-logo-15.png" alt="logo star wars" width="100" height="60" />
				</a>
			</Link>
			<div className="ml-auto p-2">
				
				<button type="button" className="btn btn-info dropdown-toggle d-flex text-center fw-bold " data-bs-auto-close="outside" data-bs-toggle="dropdown" id="dropdownMenuClickableInside">
					<p className="align-middle ms-2 mb-0 p-1"> My favourites</p>
					<p className="ms-2 bg-secondary mb-0 p-1">
						{sumLikes}
					</p>
				</button>

				<ul className="dropdown-menu dropdown-menu-end dropdown-menu-primary" aria-labelledby="dropdownMenuClickableInside">
					<p>Characters:</p>
					{ store.likesCharacters.length == 0 ?
						<li>
							<a className="dropdown-item">empty</a>
						</li>
						:
						store.likesCharacters.map((e, index) => {
							return (
								<li className="d-flex" key={index}>
									<div>
										<a className="dropdown-item">{e.name}</a>
									</div>
									<div>
										<i className="fas fa-trash" onClick={()=>{actions.toggleLikeCharacter(e)}}></i>
									</div>
								</li>
							)
						})
					}

					<p>Species:</p>
					{store.likesSpecies.length == 0 ?
						<li>
							<a className="dropdown-item">empty</a>
						</li>
						:
						store.likesSpecies.map((e, index) => {
							return (
								<li className="d-flex" key={index}>
									<div>
										<a className="dropdown-item">{e.name}</a>
									</div>
									<div>
										<i className="fas fa-trash" onClick={()=>{actions.toggleLikeSpecie(e)}}></i>
									</div>
								</li>
							)
						})
					}

					<p className="text-warning bg-dark">Vehicles:</p>
					{store.likesVehicles.length == 0 ?
						<li>
							<a className="dropdown-item">empty</a>
						</li>
						:
						store.likesVehicles.map((e, index) => {
							return (
								<li className="d-flex" key={index}>
									<div>
										<a className="dropdown-item">{e.name}</a>
									</div>
									<div>
										<i className="fas fa-trash" onClick={()=>{actions.toggleLikeVehicles(e)}}></i>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};