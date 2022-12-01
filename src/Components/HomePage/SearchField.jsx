// import React from 'react'
// import { RangeDatePicker } from "react-google-flight-datepicker";
// import "react-google-flight-datepicker/dist/main.css";
// import React, { useState, useRef, useEffect } from "react";
// import { useHistory } from "react-router-dom";




// export default function Searchfield() {

//     const history = useHistory();
//   const [roomCounter, setroomCounter] = useState(1);
//   const [rooms, setrooms] = useState(false);
//   const [roomsNum, setroomsNum] = useState(1);

//   const handleRoomDIv = () => {
//     setrooms(true);
//   };
//   // console.log(startDate);
//   let roomRef = useRef();

//   const handleLinkClick = () => {
//     history.push("/hotels");
//   };

//   useEffect(() => {
//     let handler = (event) => {
//       if (roomRef.current && !roomRef.current.contains(event.target)) {
//         setrooms(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   });
//   return (
//     <div>
 

//  <div className="red-rectangle">
//         <p className="heading-red-rectangle">
//           World’s Fastest Growing Hotel Chain
//         </p>
//         <img src="/Images/redRectangle.png" alt="redRectangle" />
//         <div className="search-field">
//           <input
//             type="text"
//             placeholder="Search by city, hotel or neighbourhood"
//           />
//           <RangeDatePicker
//             startDate={new Date(2020, 0, 15)}
//             endDate={new Date(2020, 1, 1)}
//             minDate={new Date(1900, 0, 1)}
//             maxDate={new Date(2100, 0, 1)}
//           />
//           <div className="rooms" onClick={handleRoomDIv}>
//             <p>1 Room, 1 Guest</p>
//             {rooms ? (
//               <div className="roomsDiv" ref={roomRef}>
//                 <div>
//                   <p>Rooms</p>
//                   <p>Guest</p>
//                 </div>
//                 <div>
//                   <p>
//                     Rooms <span style={{ fontWeight: "bold" }}>{roomsNum}</span>
//                   </p>
//                   <div className="room-counter">
//                     <button
//                       onClick={() => {
//                         setroomCounter((prev) => prev - 1);
//                       }}
//                     >
//                       -
//                     </button>
//                     <p>{roomCounter}</p>
//                     <button
//                       onClick={() => {
//                         setroomCounter((prev) => prev + 1);
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => {
//                       setroomsNum((prev) => prev - 1);
//                     }}
//                   >
//                     Delete room
//                   </button>
//                   <button
//                     onClick={() => {
//                       setroomsNum((prev) => prev + 1);
//                     }}
//                   >
//                     Add room
//                   </button>
//                 </div>
//               </div>
//             ) : null}
//           </div>
//           <button onClick={handleLinkClick}>Search</button>
//         </div>
//       </div>

//     </div>
//   )
// }
