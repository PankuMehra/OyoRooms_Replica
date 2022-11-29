import "./App.css";
import { LogIn } from "./Components/LOGIN/logIn";
import { LogInNav } from "./Components/LOGIN_NAVBAR/logInNavbar";
import { SignUp } from "./Components/SIGNUP/signUp";
function App() {
  return (
    <div className="App">
      {/* <LogInNav /> */}
      <SignUp />
      {/* <LogIn /> */}
    </div>
  );
}

export default App;
