import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./scss/styles.scss";

import * as bootstrap from "bootstrap";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(<App />);