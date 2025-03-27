import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/fonts/Gaegu-Regular/Gaegu-Regular.ttf";
import App from "./App.tsx";
import ScrollToTop from './components/ScrollToTop';


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
