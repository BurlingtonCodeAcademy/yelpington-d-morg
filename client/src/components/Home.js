
import Map from "./Map";
import Nav from "./Nav";

function Home(props) {


  //---------------------returns title map and nav bar---------------------------//
  return (
    <>
    <h1 id= "index-title" class="title">Yelpington!</h1>
    <div class = "map-wrap">
      
      <div
        style={{ marginRight: "0", width: "600px", display: "inline-block" }}
      >
        <Map />
      </div>
      <Nav />
    </div>
  </>
  );
}

export default Home;
