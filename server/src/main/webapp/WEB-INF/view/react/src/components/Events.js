import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

function Events(){
    return (
    <div style={{ margin: "0 auto", height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{}}
          defaultCenter={{
            lat: 39.0997,
            lng: -94.578331
          }}
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
    )
}

export default Events;
