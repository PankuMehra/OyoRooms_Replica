import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/HomePage/Navbar1';
import Navbar2 from './Components/HomePage/Navbar2';
import Navbarfunction from './Components/HomePage/Navbarfunction';
import BelowNavbar from './Components/HomePage/BelowNavbar';
import Footer from './Components/HomePage/Footer/Footer';
import World from './Components/HomePage/Worldwide/World';
// import CheckInOut from './Components/HomePage/SearchBar/CheckInOut';
import SearchField from './Components/HomePage/SearchField';



function App() {
  return (
    <div className="App">
     <Navbar1/>
     <Navbar2/>
     <BelowNavbar/>
     <World/>
     {/* <CheckInOut/> */}
     <SearchField/>
   
     
     <Footer/>
     
     
     
    </div>
  );
}

export default App;
