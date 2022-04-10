import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import CatBox from './CatBox';
import Marker from './Marker';
import { useGroups } from '../hooks/useGroups'
import axios from 'axios';

function Events(props) {
  const { filters, groups, handleClick, toggleFilter } = useGroups()
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    async function refreshMarkers() {
      const events = (await axios.get('http://localhost:8080/api/event')).data
      setMarkers(events)
      console.log(events)
    }
    refreshMarkers()
  }, [])

  return (
    <div style={{ margin: "0 auto", height: '80vh', width: '80%' }}>
      <CatBox
        filters={filters}
        toggleFilter={toggleFilter}
      />
      <GoogleMapReact
        bootstrapURLKeys={{}}
        defaultCenter={{
          lat: 39.0997,
          lng: -94.578331
        }}
        defaultZoom={12}
      >

        {/* <Marker
          lat={39.245542}
          lng={-94.754651}
          name="Marker"
          color={"#57a8cc"}
        /> */}

        {
          markers.map((marker, index) => {
            return (
              <Marker
                key={`marker-${index}`}
                title={marker.title}
                lat={marker.lat}
                lng={marker.log}
                color={"#57a8cc"}
                address={marker.address}
              />
            )
          })
        }

      </GoogleMapReact>
    </div>
  )
}

export default Events;
