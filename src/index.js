import React from "react";
import ReactDOM from "react-dom/client";
import { Provider} from "react-redux";
import App from "./App";
import store from "./redux/store/store";
import './index.scss'
import Loading from "./components/loading/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById('loader'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
root2.render(
  <React.StrictMode>
    <Provider store={store}>
      <Loading/>
    </Provider>
  </React.StrictMode>
);
