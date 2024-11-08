import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './storemap.css'

const StoreMap = () => {
  const position = [34.106747, -83.699971 ]; // Replace with your store's coordinates
  const address = '4665 GA-332 STE F, Hoschton, GA 30548';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={blueIcon}>
        <Popup>
          <div>
            <strong>Store Location</strong>
            <p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {address}
              </a>
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default StoreMap;
