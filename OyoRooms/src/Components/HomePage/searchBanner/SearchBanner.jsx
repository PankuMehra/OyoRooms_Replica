import React, { Component } from "react";
import styles from "./SearchBanner.module.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import AutocompleteForm from "../SearchBox/SearchBox";
import { hotelListingDataRequest } from "../../../Action/hotelListingDataRequest";
import { connect } from "react-redux";
import { flexbox } from "@mui/system";
// import { loadData } from "../../../redux/authentication/localStorage";

class SearchBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStart: "05/12/2022",
      inputFinish: "05/3/2023",
      checked: true,
      showrooms: false,
      roomCount: 1,
      guestCount: 1,
      roomContainer: [<div></div>],
    };
  }

  loadData = (key) => {
    try {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    } catch (err) {
      return undefined;
    }
  };

  handleSearchHotel = () => {
    const { hotelListingDataRequest, history } = this.props;
    console.log(this.props);
    let location = loadData("location");
    let lat = location.lat.toString();
    let lon = location.lng.toString();
    console.log(typeof lat);
    console.log(typeof lon);
    console.log("listing calling");
    hotelListingDataRequest({ location: { lat, lon }, path: "" });
    history.push("/listing");
  };

  handleEvent = (event, picker) => {
    this.setState({
      inputStart: picker.startDate.format("DD/MM/YYYY"),
      inputFinish: picker.endDate.format("DD/MM/YYYY"),
    });
    console.log(this.state);
    localStorage.setItem("start", this.state.inputStart);
    localStorage.setItem("finish", this.state.inputFinish);
  };

  showRoomsHandler = () => {
    this.setState({
      showrooms: !this.state.showrooms,
    });
  };

  handleRoomAndGuest = () => {
    const { roomCount, guestCount, roomContainer } = this.state;

    let ele = [
      ...roomContainer,
      <div
        // className="row m-0 p-3 justify-content-around align-items-center"
        id={styles.dropDownHead}
        style={{ display: "flex" }}
      >
        <div>Room {roomCount}</div>
        <div>
          <span
            id={styles.operator}
            onClick={() => this.setState({ guestCount: guestCount - 1 })}
          >
            –
          </span>
          <span>{guestCount}</span>
          <span
            id={styles.operator}
            onClick={() => this.setState({ guestCount: guestCount + 1 })}
          >
            +
          </span>
        </div>
      </div>,
    ];

    localStorage.setItem("roomCount", roomCount);
    localStorage.setItem("guestCount", guestCount);
    localStorage.setItem("roomCount", roomCount);
    localStorage.setItem("guestCount", guestCount);

    return ele;
  };
  handleAddRoom = () => {
    const { roomCount, guestCount, roomContainer } = this.state;
    console.log(roomContainer.length);
    let ele = (
      <div
        // className="row m-0 p-3 justify-content-around align-items-center"
        id={styles.dropDownHead}
      >
        <div>Room {roomCount}</div>
        <div>
          <span
            id={styles.operator}
            onClick={() => this.setState({ guestCount: guestCount - 1 })}
          >
            –
          </span>
          <span>{1}</span>
          <span
            id={styles.operator}
            onClick={() => this.setState({ guestCount: guestCount + 1 })}
          >
            +
          </span>
        </div>
      </div>
    );
    this.setState({
      roomContainer: [...roomContainer, ele],
      roomCount: roomCount + 1,
    });
    return roomContainer;
  };
  handleDeleteRoom = () => {
    const { roomCount, guestCount, roomContainer } = this.state;
    console.log(roomContainer.length);
    let elem = roomContainer.map((ele) => {
      if (ele.length < roomContainer.length - 2) {
        return ele;
      }
    });
    console.log(elem);
  };
  render() {
    let { showrooms, roomCount, guestCount, inputStart, inputFinish } =
      this.state;
    let {
      handleRoomAndGuest,
      handleAddRoom,
      handleDeleteRoom,
      handleSearchHotel,
    } = this;
    let showRoomsDrop = showrooms ? "" : "d-none";
    return (
      <div
        className="container-fluid"
        style={{ position: "relative", zIndex: "1" }}
      >
        <div className="row p-0">
          <div
            className="col-12 d-flex justify-content-center"
            id={styles.container}
          >
            <div className="col-10 " id={styles.wrapper}>
              <div
                className="row justify-content-around w-100"
                id={styles.background}
              >
                <img src="images/banner.svg" alt="" />
                <img src="images/banner.svg" alt="" />
              </div>
              <div
                className="row w-100 justify-content-center "
                id={styles.headingForm}
              >
                <h1 style={{ fontWeight: "bold" }} id={styles.title}>
                  Over 157,000 hotels and homes across 35 countries
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "85%",
                  margin: "auto",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  overflow: "hidden",
                }}
              >
                <div className="d-flex">
                  <AutocompleteForm />
                  {/* <input id={styles.autoComplete} type="text" placeholder="Search by city, hotel, or neighborhood" autocomplete="no" required="" /> */}
                </div>

                <div id={styles.homeCalender}>
                  <DateRangePicker
                    autoUpdateInput={false}
                    startDate={this.state.inputStart}
                    endDate={this.state.inputFinish}
                    locale={{ format: "DD/MM/YYYY" }}
                    onApply={this.handleEvent}
                    autoApply={true}
                  >
                    <div>
                      <span>{inputStart} </span>
                      <span>-</span>
                      <span>{inputFinish}</span>
                    </div>
                  </DateRangePicker>
                </div>
                <div id={styles.homeRoom}>
                  <span
                    type="button"
                    id="dropdownMenuButton"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={this.showRoomsHandler}
                  >
                    {roomCount} Rooms, {guestCount} Guests
                  </span>
                  <div
                    className={showRoomsDrop}
                    aria-labelledby="dropdownMenuButton"
                    id={styles.dropDownContainer}
                    // style={{display: "flex"}}
                  >
                    <div
                      // className="row justify-content-around"
                      id={styles.dropDownHead}
                      // style={{display: flexbox, flexDirection: "column"}}
                      style={{ display: "flex" }}
                    >
                      <div>Rooms</div>
                      <div>Guests</div>
                    </div>
                    {/* <div className="row m-0 p-3 justify-content-around align-items-center" id={styles.dropDownHead}>
                      <div>Room 1</div>
                      <div>
                        <span id={styles.operator}>–</span>
                        <span>3</span>
                        <span id={styles.operator}>+</span>
                      </div>
                    </div> */}
                    {handleRoomAndGuest()}
                    <div
                      // className="row justify-content-around"
                      id={styles.dropDownHead}
                      // style={{ border: "5px solid green" }}
                    >
                      <div onClick={() => handleAddRoom()}>Add Room</div>
                      <div onClick={() => handleDeleteRoom()}>Delete Room</div>
                    </div>
                  </div>
                </div>

                <div id={styles.homebutton} style={{ height: "67px" }}>
                  <button id={styles.homebutton} onClick={handleSearchHotel}>
                    Search
                  </button>
                </div>
              </div>
              <div
                id={styles.items}
                style={{
                  display: "flex",
                  width: "75%",
                  margin: "auto",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <div id={styles.searched}>
                  <span>Continue your search</span>
                </div>
                <div id={styles.searchedPlace}>
                  <span>
                    Hydrabad Central India Transport 17 Sep - 20 Sep | 3 Guests
                  </span>
                </div>
                <div id={styles.searchedPlace}>
                  <span>
                    Hydrabad Central India Transport 17 Sep - 20 Sep | 3 Guests
                  </span>
                </div>
                <div id={styles.searchedPlace}>
                  <span>
                    Hydrabad Central India Transport 17 Sep - 20 Sep | 3 Guests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   token: state.auth.token,
//   user: state.auth.user,
// });

// const mapDispatchToProps = (dispatch) => ({
//   hotelListingDataRequest: (payload) => dispatch(hotelListingDataRequest(payload)),
// });

export default SearchBanner;
