import App from './App.tsx'
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </StrictMode>,
)
