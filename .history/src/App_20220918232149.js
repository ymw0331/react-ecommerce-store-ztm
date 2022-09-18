import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Rotue>
        <Home path="/" />;
      </Rotue>
    </Routes>
  );
};

export default App;
