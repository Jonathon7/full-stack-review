import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        {routes}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
