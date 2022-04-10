import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import CatBox from './CatBox';
import Marker from './Marker';
import { useGroups } from '../hooks/useGroups'
import axios from 'axios';

const colors = ["#0275d8",
  "#5cb85c",
  "#5bc0de",
  "#f0ad4e",
  "#d9534f",
]

function Events(props) {
  const { filters, groups, handleClick, toggleFilter } = useGroups()
  const [markers, setMarkers] = useState([])
  const [filteredMarkers, setFilteredMarkers] = useState([])

  useEffect(() => {
    async function refreshMarkers() {
      const events = (await axios.get('http://localhost:8080/api/event')).data
      setMarkers(events)
    }
    refreshMarkers()
  }, [])

  useEffect(() => {
    const appliedFilters = filters.filter(filter => filter.checked === undefined || filter.checked === false)

    const filteredMarkers = markers.filter(marker => {
      return appliedFilters.map(filter => filter.cat_id).includes(marker.group.category.cat_id)
    })
    setFilteredMarkers(filteredMarkers)
  }, [filters, markers])

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
        {
          filteredMarkers.map((marker, index) => {
            return (
              <Marker
                key={`marker-${index}`}
                lat={marker.lat}
                lng={marker.log}
                color={colors[marker.group.category.cat_id - 1]}
                address={marker.address}
                category={marker.group.category.name}
                name={marker.name}
                markerId={marker.event_id}
              />
            )
          })
        }

      </GoogleMapReact>
    </div>
  )
}

export default Events;
