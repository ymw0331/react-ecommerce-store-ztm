import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
<Route>        <Home path="/" />;
    </Routes>
  );
};

export default App;
