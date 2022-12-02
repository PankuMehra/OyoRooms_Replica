import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LogIn } from "./Components/LOGIN/logIn";
import { SignUp } from "./Components/SIGNUP/signUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
