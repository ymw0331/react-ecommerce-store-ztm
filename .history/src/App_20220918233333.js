import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const Navigation = () =>{
  return(
    
  )
}

const Shop = () => {
  return <h1>I am the Shop Page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
        {/* /shop */}
      </Route>
    </Routes>
  );
};

export default App;