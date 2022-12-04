import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/HomePage/Navbar1';
import Navbar2 from './Components/HomePage/Navbar2';
import Navbarfunction from './Components/HomePage/Navbarfunction';
import BelowNavbar from './Components/HomePage/BelowNavbar';
import Footer from './Components/HomePage/Footer/Footer';
import World from './Components/HomePage/Worldwide/World';
import HomeSearch from './Components/HomePage/HomeSearch';
import Search from './Components/HomePage/Search';
import SearchField from './Components/HomePage/SearchField';






function App() {
  return (
    <div className="App">
     <Navbar1/>
     <Navbar2/>
     <HomeSearch/>
     {/* <Search/> */}
     {/* <SearchField/> */}
    

     <BelowNavbar/>
    
     <World/>
   
   
     
     <Footer/>
     
     
     
    </div>
  );
}

export default App;
