import React, { Component, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
// import { hotelEntityDataRequest, hotelBillingDataRequest, hotelReviewDataRequest } from "../../../redux/authentication/actions";
// import { connect } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import styles from "../searchBanner/SearchBanner.module.css";
// import { saveData } from "../../redux/authentication/localStorage";

const AutocompleteForm = () => {
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    saveData("currentCity", address);
    const data = geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        saveData("location", latLng);
      })
      .catch((error) => console.error("Error", error));
    console.log(data);
  };
  let ref = "";
  let navigate = useNavigate();
  const saveData = (key, data) => {
    // for(let i = 0; i<data.length; i++){

    // }
    for (let index = 0; index < data.length; index++) {
      if(data.charAt(index) === " " || data.charAt(index) === ','){
        break;
      }
      ref += data.charAt(index);
      console.log(ref);
    }
    localStorage.setItem(key, ref);
    navigate("/hotels")
  };
  //   return <div>sdlfiwjeds</div>
  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ width: "285px" }}>
            <input
              style={{ height: "67px" }}
              aria-expanded="false"
              id={styles.autoComplete}
              {...getInputProps({})}
              placeholder="Please enter city name..."
            />
            <div
              className="autocomplete-dropdown-container"
              style={{
                position: "absolute",
                zIndex: "100",
                marginTop: "10px",
                padding: "8px!important",
              }}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? {
                      backgroundColor: "#fafbfc",
                      cursor: "pointer",
                      borderRadius: "4px",
                      padding: "14px 8px",
                      fontSize: "16px; ",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }
                  : {
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      borderRadius: "4px",
                      padding: "14px 8px",
                      fontSize: "16px; ",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>
                      <span className="pr-2">
                        {/* <FontAwesomeIcon icon={faMapMarker} color="rgba(0, 0, 0, 0.5)" /> */}
                      </span>
                      <span className="p-2">{suggestion.description}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   token: state.auth.token,
//   user: state.auth.user,
//   entityData: state.auth.entityData,
//   review: state.auth.review,
// });

export default AutocompleteForm;
