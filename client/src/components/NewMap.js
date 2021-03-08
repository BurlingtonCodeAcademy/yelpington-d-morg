import { MapContainer, TileLayer, Marker } from "react-leaflet";
import ChangeView from "./ChangeView"

function NewMap(props) {


return(
    <MapContainer
        center={props.center}
        zoom={props.zoom}
        style={{height: "600px", width: "800px", marginRight: "0"}}
    >
        <ChangeView center = {props.center} zoom = {props.zoom} /> 
        <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position= {props.position} />
    </MapContainer>
)



}

export default NewMap