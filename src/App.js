import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutNews from "./pages/AboutNews";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about/:title" element={<AboutNews />} />
        <Route path="/:source" element={<Homepage />} />
      </Routes>
  );
}

export default App;
