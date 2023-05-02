import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import News from "./pages/AboutNews";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:title" element={<News />} />
        <Route path="/:source" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
