import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Website from "./pages/Website";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/website" element={<Website/>}/>
      </Routes>
    </>
  );
}

export default App;
