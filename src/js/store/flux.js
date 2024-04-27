const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: [] // Initialize favorites array in the store
        },
        actions: {
            // Action function to add an entity to favorites
            addToFavorites: entity => {
                const { favorites } = getStore();
                setStore({ favorites: [...favorites, entity] });
            },

            // Action function to remove an entity from favorites
            removeFromFavorites: entity => {
                const { favorites } = getStore();
                const updatedFavorites = favorites.filter(item => item !== entity);
                setStore({ favorites: updatedFavorites });
            }
        }
    };
};

export default getState;
