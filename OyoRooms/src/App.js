import "./App.css";
import Profile from "./Components/Profile/Profile";
import Partner from "./Components/Partner/Partner";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
              <Profile />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/partner" element={<Partner />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
