import "./App.css";
import Profile from "./Components/Profile/Profile";
import Partner from "./Components/Partner/Partner";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { LogIn } from "./Components/LOGIN/logIn";
import { SignUp } from "./Components/SIGNUP/signUp";
import DisplayHotel from "./Components/Hotels/DisplayHotel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/hotels" element={<DisplayHotel />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
