import React from "react";
import { Routes, Route } from "react-router-dom";
import "./categories.style.scss";
import SignIn from "./routes/navigation-component/sign-in-component";
import Home from "./routes/home-component/home-component";
import NavigationBar from "./routes/navigation-component/navigation-component";
const Shop = () => {
  return <h1>Hi iam the shop display</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
