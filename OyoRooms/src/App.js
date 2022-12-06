import "./App.css";
import Profile from "./Components/Profile/Profile";
import Partner from "./Components/Partner/Partner";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { LogIn } from "./Components/LOGIN/logIn";
import { SignUp } from "./Components/SIGNUP/signUp";
import DisplayHotel from "./Components/Hotels/DisplayHotel";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import { ChakraProvider } from "@chakra-ui/react";
import HotelDesc from "./Components/HotelDesc/HotelDesc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/hotels/:id" element={<HotelDesc />} />
        <Route path="/partner" element={<Partner />} />
        <Route
          path="/checkout/:id"
          element={
            <ChakraProvider>
              <Checkout />
            </ChakraProvider>
          }
        />
        <Route
          path="/payment/:id"
          element={
            <ChakraProvider>
              <Payment />
            </ChakraProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
