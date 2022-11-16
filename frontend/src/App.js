import "./App.css";
import SideBar from "./pages/SideBar";
import Transactions from "./pages/Transactions";
import Trade from "./pages/Trade";
import Mine from "./pages/Mine";
import Assets from "./pages/Assets";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="relative p-5">
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/mine" element={<Mine />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
