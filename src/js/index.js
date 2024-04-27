import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout'; // Ensure this path is correct
import { Context } from './store/appContext';
import injectContext from './store/appContext';
import '../styles/index.css'; // Ensure this path is correct

const root = createRoot(document.querySelector('#app'));

const Main = () => {
    return (
            <Layout />
    );
};

const Injected = injectContext(Main);

// Define the initial state
const initialState = {
    favorites: [] // Initial empty array for managing favorite items
};

root.render(
    <Context.Provider value={initialState}>
        <Injected />
    </Context.Provider>
);
