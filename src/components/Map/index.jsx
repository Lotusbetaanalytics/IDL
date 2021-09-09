import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
    static defaultProps = {
        center: 
            {
          lat: 9.7,
          lng: 8.8
        },
        zoom: 11
      };
     
      render() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAmscXExechpaMJlgsn3ykZuXOI7sFcwOA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={9.76704205682978}
            lng={8.855808259980002}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}
}

export default Maps
