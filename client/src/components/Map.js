import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import Nav from "./Nav";

function Map(props) {
  return (
    <MapContainer
      center={[44.4759, -73.2121]}
      zoom={14}
      style={{ height: "600px", width: "800px", marginRight: "10vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/*markers for every restaurant, with tooltip including name, also includes an on click event to redirect user to detailed view */}
      <Marker
        id="hen-of-the-wood"
        position={[44.4790109, -73.217258]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/hen-of-the-wood`;
          },
        }}
      >
        <Tooltip>Hen of the Wood</Tooltip>
      </Marker>

      {/*----------------^^^adding section break to outline complete marker with additions^^^------------------*/}
      <Marker
        id="american-flatbread"
        position={[44.47655925, -73.21435285244789]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/american-flatbread`;
          },
        }}
      >
        <Tooltip>American Flatbread</Tooltip>
      </Marker>
      {/*------------------------------------------------------------------------------------------------------ */}
      <Marker
        id="butch-babes"
        position={[44.4870246, -73.2087215]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/butch-babes`;
          },
        }}
      >
        <Tooltip>Butch + Babe's</Tooltip>
      </Marker>
      {/*------------------------------------------------------------------------------------------------------*/}
      <Marker
        id="the-great-northern"
        position={[44.4594945, -73.2138539]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/the-great-northern`;
          },
        }}
      >
        <Tooltip>The Great Northern</Tooltip>
      </Marker>
      {/*-------------------------------------------------------------------------------------------------------- */}
      <Marker
        id="deep-city"
        position={[44.47913845, -73.21999172608216]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/deep-city`;
          },
        }}
      >
        <Tooltip>Deep City</Tooltip>
      </Marker>
      {/*-------------------------------------------------------------------------------------------------------*/}
      <Marker
        id="leunigs-bistro"
        position={[44.477264500000004, -73.21278867560478]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/leunigs-bistro`;
          },
        }}
      >
        <Tooltip>Leunigs Bistro</Tooltip>
      </Marker>
      {/*--------------------------------------------------------------------------------------------------------*/}
      <Marker
        id="honey-road"
        position={[44.4761088, -73.2123458]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/honey-road`;
          },
        }}
      >
        <Tooltip>Honey Road</Tooltip>
      </Marker>
      {/*--------------------------------------------------------------------------------------------------------*/}
      <Marker
        id="trattoria-delia"
        position={[44.4754387, -73.2137635]}
        eventHandlers={{
          click: () => {
            window.location = window.location + `restaurant/trattoria-delia`;
          },
        }}
      >
        <Tooltip>Trattoria Delia</Tooltip>
      </Marker>
{/*--------------------------------------------------------------------------------------------------------*/}      
    </MapContainer>
  );
}

export default Map;
