import React from "react";
import Amenities from "../Amenities/Amenities";
import "./ContainerLeft.css";
import Heading from "../heading/Heading";
import Room from "../Room/Room";
export default function ContainerLeft(props) {
  const { state } = props;
  console.log(state);
  return (
    <div>
      {state.length > 0 ? (
        <>
          <Heading state={state} />
          <Amenities state={state} />
          <Room />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
/* 
address
: 
"Centrally Located, Near HKP Road, Shivaji Nagar, Bangalore"
city
: 
"Bangalore"
discount
: 
"78% off"
distance
: 
"2.0 km"

"facility1": "Elevator",
"facility2": "Free Wi-Fi",
"facility3": "Geyser",
"facilityX": "+ 6 more",
"price": "883",
hotelName
: 
"OYO 9605 Hotel Golden Inn"
id
: 
2
image1
: 
"https://images.oyoroomscdn.com/uploads/hotel_image/15871/medium/77cc61cb5af6725e.jpg"
image2
: 
"https://images.oyoroomscdn.com/uploads/hotel_image/15871/medium/b3e26b3d2b3b1228.jpg"
image3
: 
"https://images.oyoroomscdn.com/uploads/hotel_image/15871/medium/fac714944ae7e4f4.jpg"
image4
: 
"https://images.oyoroomscdn.com/uploads/hotel_image/15871/medium/ccc045d4ecae2c50.jpg"
image5
: 
"https://images.oyoroomscdn.com/uploads/hotel_image/15871/medium/d206d42524ab3aa9.jpg"
info
: 
"All staff vaccinated with 1st dose"
mainImage
: 
"https://images.oyoroomscdn.com/uploads/hotel_image/15871/medium/2a66f79e8c5dd7fa.jpg"
price
: 
"660"
rating
: 
"3.7"
ratingCount
: 
"(1513 Ratings)"
ratingStatus
: 
"Good"
strikedPrice
: 
"3017"
*/
