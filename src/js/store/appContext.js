import React, { useState, useEffect } from "react";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState({
            store: {
                favorites: [],
                favoritesCount: 0 // Initialize favorites count to 0
            },
            actions: {
                setPeople: people => setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        people: people
                    }
                })),
                setVehicles: vehicles => setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        vehicles: vehicles
                    }
                })),
                setPlanets: planets => setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        planets: planets
                    }
                })),
                addToFavorites: entity => {
                    setState(prevState => ({
                        ...prevState,
                        store: {
                            ...prevState.store,
                            favorites: [...prevState.store.favorites, entity],
                            favoritesCount: prevState.store.favoritesCount + 1 // Increment count
                        }
                    }));
                },
                removeFromFavorites: entity => {
                    setState(prevState => ({
                        ...prevState,
                        store: {
                            ...prevState.store,
                            favorites: prevState.store.favorites.filter(item => item !== entity),
                            favoritesCount: prevState.store.favoritesCount - 1 // Decrement count
                        }
                    }));
                }
            }
        });

        useEffect(() => {
            const fetchData = async () => {
                try {
                    // Fetch people
                    const peopleResponse = await fetch("https://www.swapi.tech/api/people");
                    const peopleData = await peopleResponse.json();
                    state.actions.setPeople(peopleData.results);

                    // Fetch vehicles
                    const vehiclesResponse = await fetch("https://www.swapi.tech/api/vehicles");
                    const vehiclesData = await vehiclesResponse.json();
                    state.actions.setVehicles(vehiclesData.results);

                    // Fetch planets
                    const planetsResponse = await fetch("https://www.swapi.tech/api/planets");
                    const planetsData = await planetsResponse.json();
                    state.actions.setPlanets(planetsData.results);

                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
        }, []);

        const contextValue = {
            ...state
        };

        return (
            <Context.Provider value={contextValue}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
