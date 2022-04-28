import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX}`;


export default function Mappy({cord}) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(cord.longitude);
  const [lat, setLat] = useState(cord.latitude);
  const [zoom, setZoom] = useState(12);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/alex982/cl233vxrz008u15o6l79hu7ot',
      center: [lng, lat],
      zoom: zoom
      
    });
   
  });
  return (
    <div>
      <div ref={mapContainer} style={{
        height: '400px'
      }} />
    </div>
  );
}
