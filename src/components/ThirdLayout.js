export default function ThirdLayout() {
  return (
    <>
      <div className="card-body px-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <strong>Today</strong>
          </div>

          <div className="col-lg-2 text-center">
            <img id="wrapper-icon-today" src="" className="w-100" alt="" />
          </div>

          <div className="col-lg-4 text-end">
            <span id="wrapper-forecast-temp-today">20</span>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <strong>Tomorrow</strong>
          </div>

          <div className="col-lg-2 text-center">
            <img id="wrapper-icon-tomorrow" src="" className="w-100" alt="" />
          </div>

          <div className="col-lg-4 text-end">
            <span id="wrapper-forecast-temp-tomorrow">28</span>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <strong>Day after tomorrow</strong>
          </div>

          <div className="col-lg-2 text-center">
            <img id="wrapper-icon-dAT" src="" className="w-100" alt="" />
          </div>

          <div className="col-lg-4 text-end">
            <span id="wrapper-forecast-temp-dAT">28</span>
          </div>
        </div>
      </div>
    </>
  );
}
