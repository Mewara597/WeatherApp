export default function LayoutFirst(props) {
  console.log([...props.data.weather][0].main, "LayoutFirst");
  return (
    <>
      <div className="card-header p-4 border-0">
        <div className="text-center mb-3">
          <h2 className="h2 mb-1" id="wrapper-name">
            {props.data.name}
          </h2>
          <h3 className="mb-1" id="wrapper-description">
            Weather : {[...props.data.weather][0].main}
          </h3>
          <p className="display-1 mb-1" id="wrapper-temp">
            <>
              {props.data.main.temp}
              <span>&deg;C</span>
            </>
          </p>
          <span className="">
            Pressure:{" "}
            <span id="wrapper-pressure">{props.data.main.pressure}</span>
          </span>
          <span className="mx-2">|</span>
          <span className="">
            Humidity:{" "}
            <span id="wrapper-humidity">{props.data.main.humidity}</span>
          </span>
          <br />
          <br />
          <span className="">
            MaxTemp:{" "}
            <span id="wrapper-pressure">{props.data.main.temp_max}</span>
          </span>
          <span className="mx-2">|</span>
          <span className="">
            MinTemp:{" "}
            <span id="wrapper-humidity">{props.data.main.temp_min}</span>
          </span>
          <br />
          <br />
          <span className="">
            WindSpeed:{" "}
            <span id="wrapper-pressure">{props.data.wind.speed}</span>
          </span>
          <span className="mx-2">|</span>
          <span className="">
            WindDirection:{" "}
            <span id="wrapper-humidity">
              {props.data.wind.deg}
              <span>&deg;</span>
            </span>
          </span>
          <br />
          <br />
          <span className="">
            description:{" "}
            <span id="wrapper-pressure">
              {[...props.data.weather][0].description}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
