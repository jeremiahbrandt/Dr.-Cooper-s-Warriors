import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CatBox from './CatBox';
import Marker from './Marker';




function Events(props){
    return (
    <div style={{ margin: "0 auto", height: '80vh', width: '80%' }}>
        <CatBox></CatBox>
        <GoogleMapReact
          bootstrapURLKeys={{}}
          defaultCenter={{
            lat: 39.0997,
            lng: -94.578331
          }}
          defaultZoom={12}
        >
          <Marker
                lat={ 39.045142}
                lng={-94.854651}
                name="Marker"
                color={"#57a8cc"}
        />
        </GoogleMapReact>
      </div>
    )
}

export default Events;
