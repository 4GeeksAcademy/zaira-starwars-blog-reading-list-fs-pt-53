import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Demo } from "./views/Demo";
import injectContext from "./store/appContext";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

import Home from "./views/Home";
import Single from "./views/Single";
import Favorites from "./components/Favorites";

// Create your first component
const Layout = () => {
    // The basename is used when your project is published in a subdirectory and not in the root of the domain
    // You can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default Layout;
