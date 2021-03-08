import { useEffect, useState } from "react";
import SmallNav from "./SmallNav";
import NewMap from "./NewMap";

let restaurant = document.location.pathname;
let restaurantID = restaurant.slice(12);


//-----------------ran into a bug where data would only load on refresh, made function to force reload------//
function windowLoad() {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
}

function DetailedView(props) {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  const [zoom, setZoom] = useState(17);
  const [markPosition, setPosition] = useState([44.4759, -73.2121]);

  const [restInfo, setRestInfo] = useState([]);


  //--assigns restaurant info from api to restInfo var, also reassigns map position--//
  useEffect(() => {
    if (restInfo.length === 0) {
      fetch(`/api/${restaurantID}`)
        .then((res) => res.json())
        .then((infoList) => {
          setRestInfo(infoList);
          setCenter(infoList.position);
          setPosition(infoList.position);
        });
    }
  });


 //------------------------returns restaurant info in the side bar--------------// 
  return (
    <>
      <h1 class="title">{restInfo.name}</h1>
      <div class="map-wrap">
        {windowLoad()}

        <div
          style={{ marginRight: "0", width: "600px", display: "inline-block" }}
        >
          <NewMap center={center} zoom={zoom} Marker position={markPosition} />
        </div>
        <ul id="info-pane">
          <h3>{restInfo.notes}</h3>
          <h3>{restInfo.hours}</h3>
          <h3>{restInfo.address}</h3>
          <h6>{restInfo.position}</h6>
          <SmallNav />
        </ul>
      </div>
    </>
  );
}

export default DetailedView;
