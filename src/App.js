import "./App.css";
// import ForcastPage from "./ForCastPage";
// import WheatherInput from "./components/WheatherInput";
import React, { useEffect, useState } from "react";
import ForcastPage from "./ForCastPage";

function App() {
  // let [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [isReq, setIsReq] = useState("false");

  const [weatherData, setWeatherData] = useState(null);

  let url = "https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp";

  // let api = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8974eb9bf88624a91a7633aa95739d9e`;
  let handleSubmit = function (e) {
    e.preventDefault();
    // console.log(e.target.querySelector("input").value);
    setCity(e.target.querySelector("input").value);
    // setIsReq(true);
  };

  useEffect(() => {
    console.log("this is city", city);
    if (city) {
      fetchWeatherData();
    }
  }, [isReq]);

  // let handleChangeCityName = function (e) {
  //   setName(e.target.value);
  // };

  let fetchWeatherData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8974eb9bf88624a91a7633aa95739d9e`
      );
      let data = await response.json();
      if (document.querySelector("#root > div > form > div > div > div > p")) {
        document
          .querySelector("#root > div > form > div > div > div > p")
          .remove();
      }
      if (data.cod == "404") {
        document
          .querySelector(".card-body input")
          .insertAdjacentHTML(
            "afterEnd",
            `<p class="alert-div">Please Enter Valid CityName</p>`
          );
        return false;
      }
      console.log();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    console.log("this is city");
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div
          className="card text-center mx-auto mt-5 "
          style={{ width: "20rem", backgroundImage: `url(${url})` }}
        >
          <div className="card-body">
            <div className="col-xs-2 ">
              <label className="form-label">City Name</label>
              <input
                type="name"
                className=" input-group-lg"
                placeholder="Enter city name"
                // value={city}
                // onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      {/* <WheatherInput /> */}
      {/* <ForcastPage /> */}
      {weatherData && <ForcastPage props={weatherData} />}
    </div>
  );
}

export default App;
