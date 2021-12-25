import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Component/Posts/Posts";
import FormCreate from "./Component/Form/Form";
import Header from "./Component/Header/Header";
import PostDetails from "./Component/PostDetails";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/create-memory" element={<FormCreate />} />
          <Route path="/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
