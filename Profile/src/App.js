import "./App.css";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Partner from "./Components/Partner/Partner";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/liujh" element={<Partner />} />
      </Routes>
    </div>
  );
}

export default App;