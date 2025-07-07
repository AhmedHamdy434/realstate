import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon, type LatLngExpression } from "leaflet";

type MapPopupProps = {
  lat: number;
  lng: number;
};

const MapPopup = ({ lat, lng }: MapPopupProps) => {
  const position: LatLngExpression = [lat, lng];

  return (
    <div
      className="absolute top-[calc(100%+1.5rem)] start-1/2 -translate-x-1/2 w-full h-111 md:w-[80vw] md:h-168 md:start-auto md:end-0 md:-translate-x-0 z-50
 md:top-1/2 rounded-xl overflow-hidden"
    >
      <MapContainer
        center={position}
        zoom={20}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="topright" />
        <Marker position={[lat, lng]} icon={customMarkerIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapPopup;

const customMarkerIcon = divIcon({
  className: "",
  html: `
    <div style="
      background-color: rgba(20,20,22,0.1);
      border-radius: 50%;
      width: 7rem;
      height: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    ">  <div style="
      background-color: var(--neutrals8);
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--depth2)">
       <img src="/HomeLine.svg" alt="home" style="width: 1.5rem; height: 1.5rem" />
       </div>
    </div>
  `,
});
