import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ latitude: 40.704498, longitude: -74.009499 }],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
        />
      );
    });
  };

  render() {
    const mapStyles = {
      maxWidth: "450px",
      height: "350px",
      overflowX: "hidden",
      overflowY: "hidden",
    };
    const containerStyle = {
      maxWidth: "450px",
      height: "50px",
      marginLeft: "50vw",
      marginTop: "20px",
    };
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{ lat: 40.704498, lng: -74.009499 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "HIDE FROM NOW",
})(GoogleMap);
