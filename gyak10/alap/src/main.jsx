import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './view/App.jsx'
//import './index.css'
import "./grafilogika.css";
import { Provider } from "react-redux";
//import { store } from "./state/store";
//import { selectTable, start } from "./state/graphilogics/graphiLogicsSlice";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
      <App />
    {/*</Provider>*/}
  </React.StrictMode>,
)

// Log the initial state
//console.log("Initial state: ", store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
/*const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);*/

// Now, dispatch some actions
/*store.dispatch(start(["# #", " # ", "# #"]));
console.log(selectTable(store.getState()));

unsubscribe();*/
