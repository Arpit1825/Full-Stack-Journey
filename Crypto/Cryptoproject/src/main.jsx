import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route} from 'react-router-dom'
import CoinDetail from './components/CoinDetail.jsx'
import ReactDOM from "react-dom/client"
import { CurrencyProvider } from './contexts/CurrencyContext.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import ErrorBoundary from './components/ErrorBoundary.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
  <>
     <Route  path="/"  element={<App />} errorElement={<ErrorBoundary> <App /> </ErrorBoundary>} />
    <Route  path="/coin/:id" element={<CoinDetail />} errorElement={<ErrorBoundary> <CoinDetail /> </ErrorBoundary>}/>
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