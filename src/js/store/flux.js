const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			characters: [],
			singleCharacter: null,
			vehicles: [],
			singleVehicle: null,
			species: [],
			singleSpecie: null,
			likesCharacters: [],
			likesVehicles: [],
			likesSpecies: [],
		},
		actions: {
			// Utiliza getActions para llamar a una función dentro de otra función
			getAllCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					const data = await response.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error('Error al mostrar el personaje:', error);
				}
			},

			 getAllVehicles: async () => {
			 	try {
			 		const response = await fetch("https://www.swapi.tech/api/vehicles/");
			 		const data = await response.json();
			 		setStore({ vehicles: data.results });
			 	} catch (error) {
			 		console.error('Error al mostrar el vehiculo:', error);
			 	}
			 },

			 getAllSpecies: async () => {
			 	try {
			 		const response = await fetch("https://www.swapi.tech/api/species/");
			 		const data = await response.json();
			 		setStore({ species: data.results });
			 	} catch (error) {
			 		console.error('Error al mostrar la especie:', error);
				}
			},


			getCharacterDetails: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					const data = await response.json();
					setStore({singleCharacter: data.result})

				} catch (error) {
					console.error("Error al mostrar los detalles del personaje")
				}

			},


			getVehiclesDetails: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
					const data = await response.json();
					setStore({singleVehicle: data.result})
					 
				} catch (error) {
					console.error("Error al mostrar los detalles del vehiculo")
				}

			},

			getSpecieDetails: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/species/${uid}`);
					const data = await response.json();
					setStore({singleSpecie: data.result})

				} catch (error) {
					console.error("Error al mostrar los detalles de la especie")
				}

			},

			toggleLikeCharacter: (character) => {
				const {likesCharacters} = getStore()
				let updatedLikesCharacters;
				//recorre y saber si se encuentra en la lista 
				const index = likesCharacters.findIndex((like) => like.uid === character.uid)
				if (index === -1) {
					// si llega al final del arreglo y no está en la lista lo añada
					updatedLikesCharacters = [...likesCharacters, character]}
				else {
					updatedLikesCharacters = likesCharacters.filter((like) => like.uid !== character.uid)
				}
				setStore({likesCharacters: updatedLikesCharacters})
			},
			
			toggleLikeVehicles: (vehicles) => {
				const {likesVehicles} = getStore()
				let updatedLikesVehicles;
				//recorre y saber si se encuentra en la lista 
				const index = likesVehicles.findIndex((like) => like.uid === vehicles.uid)
				if (index === -1) {
					// si llega al final del arreglo y no está en la lista lo añada
					updatedLikesVehicles = [...likesVehicles, vehicles]}
				else {
					updatedLikesVehicles = likesVehicles.filter((like) => like.uid !== vehicles.uid)
				}
				setStore({likesVehicles: updatedLikesVehicles})
			},

			toggleLikeSpecie: (specie) => {
				const {likesSpecies} = getStore()
				let updatedLikesSpecies;
				//recorre y saber si se encuentra en la lista 
				const index = likesSpecies.findIndex((like) => like.uid === specie.uid)
				if (index === -1) {
					// si llega al final del arreglo y no está en la lista lo añada
					updatedLikesSpecies = [...likesSpecies, specie]}
				else {
					updatedLikesSpecies = likesSpecies.filter((like) => like.uid !== specie.uid)
				}
				setStore({likesSpecies: updatedLikesSpecies})
			},
		},
	};
};

export default getState;