import React from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Website = React.lazy(() => import("./pages/Website"));

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/website" element={<Website />} />
      </Routes>
    </>
  );
};

export default App;
