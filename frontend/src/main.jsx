import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

//font awesome - npm thi download krel chhe
import '@fortawesome/fontawesome-free/css/all.min.css';

//routers mate
import { BrowserRouter} from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
