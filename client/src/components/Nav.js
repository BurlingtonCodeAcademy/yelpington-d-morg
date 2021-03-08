import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

function Nav(props) {
  const [restaurants, setRestaurants] = useState([]);


  //------------grabs restaurants from api and assigns them restaurant var----------------//
  useEffect(() => {
    if (restaurants.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((restaurantList) => {
          setRestaurants(restaurantList);
        });
    }
  });


 /*-----------------------------------sets the restaurants from the api to links in the nav bar----------*/ 
  return (
    <ul id="nav-bar">
      <h2>Local Eats!</h2>
      <h3 id="zoom">Zoom to:</h3>
      {restaurants.map((title, index) => {
        return (
          <a href={`./restaurant/${title}`}>
            <h3 key={index} class="linkBox">
              <Link class="link" to={`/restaurant/${title}`}>
                {title.replaceAll("-", " ") + " >>"}
              </Link>
            </h3>
          </a>
        );
      })}
    </ul>
  );
}

export default Nav;
