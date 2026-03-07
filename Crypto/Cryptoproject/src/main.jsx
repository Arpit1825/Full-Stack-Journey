import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route} from 'react-router-dom'
import CoinDetail from './components/CoinDetail.jsx'
import ReactDOM from "react-dom/client"

const router=createBrowserRouter(
  createRoutesFromElements(
  <>
     <Route  path="/" element={<App />}/>
    <Route  path="/coin/:id" element={<CoinDetail />}/>
    </>
  )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)