import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import '../../assets/styles/MapAPI.scss'

const MapAPI = () => {

  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [-11000000, 4320000], // Center the map at the coordinates [longitude, latitude]
        zoom: 5, // Adjust the zoom level
      }),
    });

    return () => map.setTarget(null); // Clean up the map on API unmount
  }, []);

  return (
    <div id='map' className='MapAPI'></div>
  );
};

export default MapAPI;