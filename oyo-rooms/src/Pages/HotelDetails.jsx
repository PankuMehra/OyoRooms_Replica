
import "../App.css";
import DescNav from "../Componants/HotelDetails/DescNav/DescNav";
import Slider from "../Componants/HotelDetails/Slider/Slider";
import ContainerLeft from "../Componants/HotelDetails/maindata/ContainerLeft";
import ContainerRight from "../Componants/HotelDetails/maindata/ContainerRight";
import { useState, useEffect } from "react";
import { URL } from "../URL";

function HotelDetails() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    fetch(`${URL.hotel}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  };
  return (
    <div className="App">
      <DescNav />
      <Slider state={state} />

      <div className="maindata">
        <ContainerLeft state={state} />
        <ContainerRight state={state} />
      </div>
    </div>
  );
}

export default HotelDetails;
