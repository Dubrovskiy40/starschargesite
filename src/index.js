import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import "./scss/app.scss";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./scss/app.scss";

const container = document.getElementById("root");
const root = createRoot(container);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
