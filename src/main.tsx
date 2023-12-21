import App from "./App"
import "./assets/fonts/TTTravels-Medium.ttf"
import "./assets/fonts/TTTravels-Regular.ttf"
import "./index.css"
import { store } from "./redux/store"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
