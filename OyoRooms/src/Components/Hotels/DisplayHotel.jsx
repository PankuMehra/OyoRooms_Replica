import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import TextField from "@mui/material/TextField";
import styles from "./style.css";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import ElevatorIcon from "@mui/icons-material/Elevator";
import Stack from "@mui/material/Stack";

import { getHotelRooms } from "./api";
import Navbar1 from "../HomePage/Navbar1";
// console.log(getHotelRooms);
function HotelItem({
  hotelName,
  address,
  mainImage,
  image1,
  image2,
  image3,
  image4,
  city,
  rating,
  price,
  discount,
  strikedPrice,
  id,
}) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginBottom: "10%  " }}>
            <img
              src={mainImage}
              alt="img"
              height="400px"
              width="96%"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ width: "10%" }}>
            <img
              src={image1}
              alt="img"
              height="112px"
              width="125px"
              style={{ objectFit: "cover" }}
            />
            <img
              src={image2}
              alt="img"
              height="112px"
              width="125px"
              style={{ objectFit: "cover" }}
            />
            <img
              src={image3}
              alt="img"
              height="112px"
              width="125px"
              style={{ objectFit: "cover" }}
            />
            {/* <img src={image4} alt="img" height="112px" width="125px" /> */}
          </div>
          <div style={{ marginLeft: "40px", textAlign: "left" }}>
            <div>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>
                {hotelName}
              </span>
            </div>
            <p>{address}</p>
            <div style={{ display: "flex" }}>
              <div>
                <button
                  style={{
                    background: "rgb(82,181,32)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  {rating}★
                </button>
                ({rating * 10} Ratings) .{rating > 4 ? "Very Good" : "Good"}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <p>🛏 AC</p>
              </div>
              <div>
                <p>🚘 Parking Facility</p>{" "}
              </div>
              <div>
                {" "}
                <p>🙏 Reception</p>{" "}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <p>
                  <WifiIcon /> Free Wifi
                </p>
              </div>
              <div>
                <p>📺 TV</p>
              </div>
              <div>
                <p>
                  <CameraswitchIcon /> CCTV Camera
                </p>
              </div>
              <div>
                <p>
                  <ElevatorIcon /> Elevator
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>{rating > 4 ? "WIZARD MEMBER" : "Vaccinated Staff"}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <div>
                  <p style={{ lineHeight: "5px" }}>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "rgb(238,42,35)",
                      }}
                    >
                      ₹{price}
                    </span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontSize: "10px",
                        lineHeight: "25px",
                        color: "rgb(180,186,188)",
                      }}
                    >
                      ₹{strikedPrice}
                    </span>
                    <span style={{ color: "rgb(244,165,34)" }}>
                      {discount}% off
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "rgb(163,169,172)",
                      fontSize: "12px",
                    }}
                  >
                    per room per night
                  </p>
                </div>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="out"
                    style={{ color: "balck", border: "1px solid black" }}
                  >
                    <Link
                      to={`/hotels/${id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      View Details
                    </Link>
                  </Button>
                  <Button
                    variant="out"
                    style={{
                      border: "1px solid black",
                      color: "white",
                      backgroundColor: "green",
                    }}
                  >
                    <Link
                      to={`/oyorooms/${city}/${id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Book Now
                    </Link>
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function valuetext(value) {
  return value * 100;
}

function DisplayHotel() {
  const [start, setStart] = React.useState([0]);
  const [end, setEnd] = React.useState([10000]);
  const [value, setValue] = React.useState([0, 1000]);
  const [sortBy, setSortBy] = React.useState("popularity");
  const [filterBy, setFilterBy] = useState("");
  const [mail, setMail] = useState("e.g. abc@gmail.com");
  const hoteldata = useSelector((state) => {
    return state.Reducer.hotelDataArray;
  });
  let currentCity = localStorage.getItem("currentCity") || "Mumbai";

  //   const handleMailChange = (event) => {
  //     setMail(event.target.value);
  //   };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // let x = newValue[0] * 1000;
    setStart(newValue[0] * 100);
    setEnd(newValue[1] * 100);
    hoteldata.filter((elem) => {
      return elem.price > start;
    });
    // JSON.parse(localStorage.getItem("currentCity"));
    getHotelRooms(currentCity, dispatch);
    console.log("hoteldata:", hoteldata);
    // console.log('new:', new);
  };
  // console.log(start);
  // console.log(end);

  //   let { hotelDataArray, isLoading, isError } = useSelector(
  //     (state) => state.app,
  //     shallowEqual
  //   );
  const dispatch = useDispatch();

  console.log(hoteldata);

  useEffect(() => {
    //   dispatch();
    getHotelRooms(currentCity, dispatch);
  }, []);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  switch (sortBy) {
    case "rating": {
      hoteldata.sort((a, b) => a.rating - b.rating);
      break;
    }
    case "lowtohigh": {
      hoteldata.sort((a, b) => a.price - b.price);
      break;
    }
    case "hightolow": {
      hoteldata.sort((a, b) => b.price - a.price);
      break;
    }
    case "popularity": {
      hoteldata.sort((a, b) => a.popularity - b.popularity);
      break;
    }
    default:
      return hoteldata;
  }
  const handleFilterClick = (e) => {
    setFilterBy(e.target.textContent);
    // console.log(filterBy);
  };

  return (
    <div>
      <Navbar1 />
      <div
        style={{
          background: "rgb(222,150,64)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "-5px" }}>
          <span style={{ fontSize: "30px" }}>⚠</span>
        </div>
        <div style={{ padding: "5px" }}>
          <span
            style={{
              fontSize: "14px",
              lineHeight: "13px",
              color: "rgb(32,32,32)",
            }}
          >
            Please check the travel advisory issued by the concerned state
            government/local authorities before booking, as some places may have
            COVID-19 related travel/lodging restrictions.
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          padding: "0px 25px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            width: "20%",
            borderRight: ".05px solid lightgrey",
            paddingRight: "20px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "30px" }}>Filters</h2>
          </div>
          <div>
            <h4 style={{ marginTop: "-15px" }}>
              Popular locations In Sector-38
            </h4>
          </div>
          {/* <div style={{}}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: "9px",
                width: "90%",
                border: ".5px soldi lightgray",
              }}
            />
          </div> */}

          <div style={{ margin: "10px 0px" }}>
            <Button
              variant="outlined"
              onClick={handleFilterClick}
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none",
                padding: "5px 20px",
                textTransform: "Capitalize",
                marginTop: "5px",
              }}
            >
              Huda City Centre Metro
            </Button>
          </div>
          <div style={{ margin: "10px 0px" }}>
            <Button
              variant="outlined"
              onClick={handleFilterClick}
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none",
                padding: "5px 20px",
                textTransform: "Capitalize",
                marginTop: "5px",
              }}
            >
              Sector 14
            </Button>
          </div>
          <div style={{ margin: "10px 0px" }}>
            <Button
              variant="outlined"
              onClick={handleFilterClick}
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none",
                padding: "5px 20px",
                textTransform: "Capitalize",
                marginTop: "5px",
              }}
            >
              Gurgaon Bus Stand
            </Button>
          </div>
          <div style={{ margin: "10px 0px" }}>
            <Button
              variant="outlined"
              onClick={handleFilterClick}
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none",
                padding: "5px 20px",
                textTransform: "Capitalize",
                marginTop: "5px",
              }}
            >
              Iffco Chowk
            </Button>
          </div>
          <div style={{ margin: "10px 0px" }}>
            <Button
              variant="outlined"
              onClick={handleFilterClick}
              style={{
                background: "rgb(242,242,242)",
                color: "rgb(34,34,34)",
                border: "none",
                padding: "5px 20px",
                textTransform: "Capitalize",
                marginTop: "5px",
              }}
            >
              Medanta Hospital
            </Button>
          </div>

          <div>
            <Button
              variant="outlined"
              style={{
                background: "none",
                color: "rgb(239,42,36)",
                border: "none",
                fontSize: "15px",
                textTransform: "Capitalize",
                fontWeight: "600",
                marginLeft: "-7px",
              }}
            >
              + View More
            </Button>
          </div>
          <hr
            style={{ border: ".2px solid rgb(224,224,224)", marginTop: "15px" }}
          />
          <div>
            <h4 style={{ marginTop: "15px" }}>Price </h4>
            <Box>
              <Slider
                style={{ color: "rgb(239,42,36)" }}
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
              />
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "15px",
                fontWeight: "900",
              }}
            >
              <span
                style={{
                  backgroundColor: "#f3f5f7",
                  padding: "7px",
                  borderRadius: "15px",
                }}
              >
                ₹{start}
              </span>
              <span
                style={{
                  backgroundColor: "#f3f5f7",
                  padding: "7px",
                  borderRadius: "15px",
                }}
              >
                {" "}
                ₹{end}
              </span>
            </div>
          </div>
          <hr
            style={{ border: ".2px solid rgb(224,224,224)", marginTop: "10px" }}
          />

          <div>
            <h4>Collections</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <Box
                        component="div"
                        fontSize={15}
                        fontWeight={500}
                        marginTop={0.5}
                      >
                        Family OYOs
                      </Box>
                    }
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <Box
                        component="div"
                        fontSize={15}
                        fontWeight={500}
                        marginTop={0.5}
                      >
                        For Group Travellers
                      </Box>
                    }
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <Box
                        component="div"
                        fontSize={15}
                        fontWeight={500}
                        marginTop={0.5}
                      >
                        Local IDs accepted
                      </Box>
                    }
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <Box
                        component="div"
                        fontSize={15}
                        fontWeight={500}
                        marginTop={0.5}
                      >
                        OYOs welcomes couples
                      </Box>
                    }
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <Box
                        component="div"
                        fontSize={15}
                        fontWeight={500}
                        marginTop={0.5}
                      >
                        Near Metro Station
                      </Box>
                    }
                  />
                </FormGroup>
              </div>
              <div>
                <Button
                  variant="outlined"
                  style={{
                    background: "none",
                    color: "rgb(239,42,36)",
                    border: "none",
                    fontSize: "15px",
                    textTransform: "Capitalize",
                    fontWeight: "600",
                    marginLeft: "-10px",
                    marginTop: "10px",
                  }}
                >
                  + View More
                </Button>
              </div>
            </div>
            <hr
              style={{
                border: ".2px solid rgb(224,224,224)",
                marginTop: "10px",
              }}
            />
            <h4>Categories</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",

                fontSize: "12",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "15px",
                      width: "18px",
                      cursor: "pointer",
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}> OYO Rooms</span>
                  <span style={{ lineHeight: "25px", fontSize: "15px" }}>
                    - Super affordable stays with essential aminities
                  </span>
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "15px",
                      width: "18px",
                      cursor: "pointer",
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}> Townhouse </span>
                  <span style={{ fontSize: "15px" }}>
                    - Your friendly, premium neighbourhood hotel-Serviced by OYO
                  </span>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "15px",
                      width: "18px",
                      cursor: "pointer",
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}> Flagship </span>
                  <span style={{ lineHeight: "25px", fontSize: "15px" }}>
                    - Affordable hotels at prime locations - Serviced by OYO
                  </span>
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "15px",
                      width: "18px",
                      cursor: "pointer",
                    }}
                  />{" "}
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Home{" "}
                  </span>{" "}
                  <span style={{ lineHeight: "25px", fontSize: "15px" }}>
                    - Villas and Apartments with space and privacy
                  </span>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <input
                    type="checkbox"
                    name="OYO Rooms"
                    label="Oyo"
                    style={{
                      height: "15px",
                      width: "20px",
                      cursor: "pointer",
                      fontWeight: "900",
                    }}
                  />{" "}
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Capital O{" "}
                  </span>{" "}
                  <span style={{ lineHeight: "25px", fontSize: "15px" }}>
                    - Beautiful designed private crafted for the traveller who
                    craves comfort
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "rgb(239,42,36)",
                  border: "none",
                  fontSize: "15px",
                  textTransform: "Capitalize",
                  fontWeight: "600",
                  marginLeft: "-10px",
                  marginTop: "10px",
                }}
              >
                + View More
              </Button>
            </div>
            <hr
              style={{
                border: ".2px solid rgb(224,224,224)",
                marginTop: "10px",
              }}
            />
            <h4>Accomodation Type</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  name="OYO Rooms"
                  label="Oyo"
                />
                OYO Home
              </div>
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  name="OYO Rooms"
                  label="Oyo"
                />
                Hotel
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "rgb(239,42,36)",
                  border: "none",
                  fontSize: "15px",
                  textTransform: "Capitalize",
                  fontWeight: "600",
                  marginLeft: "-10px",
                  marginTop: "10px",
                }}
              >
                + View More
              </Button>
            </div>
            <hr
              style={{
                border: ".2px solid rgb(224,224,224)",
                marginTop: "10px",
              }}
            />
            <h4>Hotel Facilities</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  name="OYO Rooms"
                  label="Oyo"
                />{" "}
                Seating Area
              </div>
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  name="OYO Rooms"
                  label="Oyo"
                />{" "}
                Balcony
              </div>
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  name="OYO Rooms"
                  label="Oyo"
                />
                Full Sized Bed
              </div>
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  name="OYO Rooms"
                  label="Oyo"
                />
                King Sized Bed
              </div>
              <div>
                {" "}
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  name="OYO Rooms"
                  label="Oyo"
                />
                Queen Sized Bed
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "rgb(239,42,36)",
                  border: "none",
                  fontSize: "15px",
                  textTransform: "Capitalize",
                  fontWeight: "600",
                  marginLeft: "-10px",
                  marginTop: "10px",
                }}
              >
                + View More
              </Button>
            </div>
            <hr
              style={{
                border: ".2px solid rgb(224,224,224)",
                marginTop: "10px",
              }}
            />
            <h4>Check-in features</h4>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <Box
                      component="div"
                      fontSize={15}
                      fontWeight={500}
                      marginTop={0.5}
                    >
                      Pay at Hotel
                    </Box>
                  }
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "80%",
            margin: "auto",
            paddingLeft: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: "30px",
              //   justifyContent: "left"
            }}
          >
            <div>
              <span style={{ fontSize: "21px", fontWeight: "700" }}>
                Hotels in {currentCity}
              </span>
              <span style={{ marginLeft: "350px" }}> Map View </span>
              <span style={{ marginLeft: "8px" }}>
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </span>
              <span style={{ marginLeft: "100px" }}>Sort By </span>
              <span>
                <select
                  onChange={handleSortBy}
                  name="sort"
                  id="sort"
                  style={{ padding: "10px", width: "200px" }}
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Guest Ratings</option>
                  <option value="lowtohigh">Price Low To High</option>
                  <option value="hightolow">Price High To Low</option>
                </select>
              </span>
            </div>
          </div>
          <hr
            style={{ border: ".2px solid rgb(224,224,224)", marginTop: "15px" }}
          />

          <div style={{ height: "1960px" }}>
            {/* {isLoading && <Skeleton
              animation="wave"
              height="500px"
              width="80%"
              style={{ marginBottom: 6 }}
            />} */}

            {/* {  hotelDataArray.length ===0 && !isLoading && <div style={{textAlign: "center", margin:"20%"}}>
              <div style={{ fontSize: "100px", color:"red", fontWeight: "bold" }}>
                4oh!4
              </div>
              <div style={{color:"gray"}}>
                <p>There is no property available for this search </p>
                
              </div>
              <div style={{ color:"gray" }}>
                <p>Book your next stay here</p>
                
              </div>
              <div>
                <Link to="/" style={{textDecoration:"none", padding: "10px", background:"green", color:"white"}}>
                 Go To Homepage 
                </Link>
              </div>
            </div> } */}

            {/* .filter((elem) => {
                if (elem.citys === filterBy && (elem.price >= start) && (elem.price <= end)) {
                  return elem.citys;
                } else if (filterBy === "") {
                  return elem;
                }
               return;
              }) */}
            {hoteldata.map((item) => (
              <HotelItem key={item.id} {...item} />
            ))}
          </div>
          <hr style={{ border: ".2px solid rgb(224,224,224)" }} />

          {/* {isLoading && <Skeleton
              animation="wave"
              height="800px"
              width="80%"
              style={{ marginBottom: 6 }}
            />} 
        
          <div
            style={{
              border: "1px solid rgb(224,224,224)",
              borderRadius: "10px",
              padding: "50px",
              marginTop: "20px"
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <img src="./images/fireLogo.png" alt="img" height="60px" />
              </div>
              <div>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>
                    Get access to exclusive deals
                  </span>
                </div>
                <div>
                  <span style={{ color: "rgb(127,127,127)" }}>
                    Only the best deals reach your inbox
                  </span>
                </div>
              </div>
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Your email"
                    value={mail}
                    onChange={handleMailChange}
                  />
                </Box>
              </div>
              <div style={{ padding: "10px" }}>
                <Button
                  variant="outlined"
                  style={{
                    background: "red",
                    color: "white",
                    border: "1px solid red",
                    padding: "13px",
                    width: "150px"
                  }}
                >
                  Notify me
                </Button>
              </div>
            </div>
          </div>
 */}
        </div>
      </div>
    </div>
  );
}

export default DisplayHotel;
