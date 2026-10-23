import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LazyLoad from 'react-lazyload';

createRoot(document.getElementById("root")).render(<App />);
