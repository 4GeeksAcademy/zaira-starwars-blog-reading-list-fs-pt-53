import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharactersCard } from "../component/CharactersCard";
import { VehiclesCard } from "../component/VehiclesCard";
import { SpeciesCard } from "../component/SpeciesCard"

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// Llama a las acciones de obtener datos cuando el componente se monta
		actions.getAllCharacters();
		actions.getAllVehicles();
		actions.getAllSpecies();
	}, []);

	return (
		<div className="mt-5">
			<div className="characters">
				<h3>Characters</h3>
				<div className="scrollflow">
					{store.characters.map((character, index) => (
						<div className="" key={index}>
							<CharactersCard character={character} />
						</div>
					))}
				</div>
			</div>

			<div className="species">
				<h3>Species</h3>
				<div className="scrollflow">
					{store.species.map((specie, index) => (
						<div className="" key={index}>
							<SpeciesCard specie={specie} />
						</div>
					))}
				</div>
			</div>

			<div className="characters">
				<h3>Vehicles</h3>
				<div className="scrollflow">
					{store.vehicles.map((vehicle, index) => (
						<div className="" key={index}>
							<VehiclesCard vehicle={vehicle} />
						</div>
					))}
				</div>
			</div>


		</div>
	);
};