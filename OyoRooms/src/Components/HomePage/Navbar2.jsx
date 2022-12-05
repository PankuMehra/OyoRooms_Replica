import React from "react";
import Navbarfunction from "./Navbarfunction";

export default function Navbar2() {
  return (
    <div className="locations" >
      <div>
        <Navbarfunction
          name="Bangalore"
          more={[
            "Popular Localities",
            "Koramangala",
            "Majestic",
            "Madiwala",
            "Marathahalli",
            "Hsr Layout",
            "Indiranagar",
            "Kempegowda International Airport",
            "Whitefield",
            "Jp Nagar",
            "Jayanagar",
          ]}
        />
      </div>

      <div>
        <Navbarfunction
          name="Chennai"
          more={[
            "Popular Localities",
            "Mount Road",
            "Chennai Central Railway Station",
            "Ecr East Coast Road",
            "T Nagar",
            "Anna Nagar",
            "Velachery",
            "Chennai International Airport",
            "Koyambedu",
            "Guindy",
            "Tambaram",
          ]}
        />
      </div>

      <div>
        <Navbarfunction
          name="Delhi"
          more={[
            "Popular Localities",
            "Mahipalpur",
            "New Delhi Railway Station",
            "Paharganj",
            "Karol Bagh Metro Station",
            "Rohini",
            "Dwarka, New Delhi",
            "Indira Gandhi International Airport",
            "Laxmi Nagar",
            "Lajpat Nagar",
          ]}
        />
      </div>

      <div>
        <Navbarfunction
          name="Gurugram"
          more={[
            "Popular Localities",
            "Huda City Center Metro",
            "Mg Road",
            "Gurgaon Bus Stand",
            "Sector 14",
            "DLF Phase 3",
            "Sector 29",
            "Medanta Hospital",
            "Sector 38",
            "Iffco Chowk",
            "Gurgaon Palam Vihar",
          ]}
        />
      </div>
      <div>
        <Navbarfunction
          name="Hyderabad"
          more={[
            "Popular Localities",
            "Secunderabad  Railway Station",
            "Gachibowli ",
            "Madhapur",
            "LB Nagar",
            "Kukatpally",
            "Ameerpet",
            "Hitech City",
            "Kondapur",
            "Begumpet",
            "Banjara Hills",
          ]}
        />
      </div>

      <div>
        <Navbarfunction
          name="Kolkata"
          more={[
            "Popular Localities",
            "New Town",
            "Howrah Railway Station",
            "Salt Lake City",
            "Kolkata International Airport",
            "Park Street",
            "Sealdah Railway Station",
            "Dum Dum",
            "Esplanade Metro Station",
            "Sector 5 Salt Lake City",
            "Dum Dum Airport 1 No. Gate",
          ]}
        />
      </div>

      <div>
        <Navbarfunction
          name="Mumbai"
          more={[
            "Popular Localities",
            "Andheri East",
            "Vashi",
            "Thane",
            "Dadar",
            "Andheri",
            "Panvel",
            "Bandra",
            "Saki Naka",
            "Malad West",
          ]}
        />
      </div>

      <div>
        <Navbarfunction
          name="Asansol"
          more={[
            "Popular Localities",
            "Baga Beach North Goa",
            "Panjim",
            "Madgaon",
            "Calangute",
            "Vasco Da Gama",
            "Porvorim",
            "South Goa",
            "Madgaon Railway Station",
            "Mapusa",
            "Panaji",
          ]}
        />
      </div>
      <div>
        <Navbarfunction
          name="Noida"
          more={[
            "Popular Localities",
            "Sector 62",
            "Sector 18",
            "Pari Chowk",
            "Sector 15",
            "Greater Noida",
            "Noida City Centre",
            "Sector 51",
            "Sector 66",
            "Gaziabad",
            "Botanical Garden",
          ]}
        />
      </div>
      <div>
        <Navbarfunction
          name="Pune"
          more={[
            "Popular Localities",
            "Pimpri Chinchwad",
            "Viman Nagar",
            "Shivaji Nagar",
            "Baner",
            "Pune Railway Station",
            "Hinjewadi",
            "Kharadi",
            "Wakad",
            "Hadapsar",
            "Katraj",
          ]}
        />
      </div>

      {/* <div>
        <Navbarfunction
          name="Goa"
          more={[
            "Popular Localities",
            "Baga Beach North Goa",
            "Panjim",
            "Madgaon",
            "Calangute",
            "Vasco Da Gama",
            "Porvorim",
            "South Goa",
            "Madgaon Railway Station",
            "Mapusa",
            "Panaji",
          ]}
        />
      </div> */}
      <div>
        <p>All Cities</p>
        {/* <img src="/Images/right.png" alt="right" /> */}
      </div>
    </div>
  );
}
