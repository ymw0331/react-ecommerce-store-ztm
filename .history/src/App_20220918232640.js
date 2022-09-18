import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const Shop = () => {
return(<h1></h1>)

};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
