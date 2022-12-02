import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import BelowNavbar from "./BelowNavbar";
import Footer from "./Footer/Footer";
import World from "./Worldwide/World";
// import "./HomePage.css"

function HomePage() {
  return (
    <div className="Homeage">
      <Navbar1 />
      <Navbar2 />
      <BelowNavbar />
      <World />
      <Footer />
    </div>
  );
}

export default HomePage;
