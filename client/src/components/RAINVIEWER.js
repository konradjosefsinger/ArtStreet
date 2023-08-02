import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-rainviewer';

const RainViewer = ({ latitude, longitude, zoomLevel }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the Leaflet map
    const map = L.map(mapRef.current).setView([latitude, longitude], zoomLevel);

    // Add a tile layer (for example, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add Rainviewer control to the map
    const rainviewer = L.control.rainviewer({
      position: 'bottomleft',
      nextButtonText: '>',
      playStopButtonText: 'Play/Stop',
      prevButtonText: '<',
      positionSliderLabelText: 'Hour:',
      opacitySliderLabelText: 'Opacity:',
      animationInterval: 500,
      opacity: 0.5
    });
    rainviewer.addTo(map);

    return () => {
      // Clean up and remove the map and control when the component is unmounted
      map.remove();
      rainviewer.remove();
    };
  }, [latitude, longitude, zoomLevel]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default RainViewer;
