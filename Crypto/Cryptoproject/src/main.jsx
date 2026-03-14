import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route} from 'react-router-dom'
import CoinDetail from './components/CoinDetail.jsx'
import ReactDOM from "react-dom/client"
import { CurrencyProvider } from './contexts/CurrencyContext.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router=createBrowserRouter(
  createRoutesFromElements(
  <>
     <Route  path="/" element={<App />}/>
    <Route  path="/coin/:id" element={<CoinDetail />}/>
    </>
  )
)
ReactDOM.createRoot(document.getElementById("root")).render(
 <Provider store={store}>
   <CurrencyProvider>
    <RouterProvider router={router} />
  </CurrencyProvider>
 </Provider>
)