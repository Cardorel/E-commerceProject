import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import  Reducers from "./REDUX/COMBINES";
import { PersistGate } from "redux-persist/integration/react";
import GobalApp from "./gobalApp";

const store = createStore(Reducers, applyMiddleware(thunk));
const persist = persistStore(store);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persist}>
          <GobalApp />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById("Xherbsroot")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
