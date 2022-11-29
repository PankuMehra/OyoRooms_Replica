import logo from "./logo.svg";
import "./App.css";
import DescNav from "./components/DescNav";
import Slider from "./components/Slider";
import ContainerLeft from "./components/maindata/ContainerLeft";
import ContainerRight from "./components/maindata/ContainerRight";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    fetch(`https://oyo-data.onrender.com/hotel?id=2`)
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

export default App;
