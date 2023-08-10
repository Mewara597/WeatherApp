export default function SecondLayout() {
  return (
    <>
      <div className="card-body p-4 border-top border-bottom mb-2">
        <div className="row text-center">
          <div className="col-2">
            <strong className="d-block mb-2">Now</strong>
            <img id="wrapper-icon-hour-now" src="" className="" alt="" />
            <strong className="d-block" id="wrapper-hour-now"></strong>
          </div>

          <div className="col-2">
            <strong className="d-block mb-2" id="wrapper-time1"></strong>
            <img id="wrapper-icon-hour1" src="" className="" alt="" />
            <strong className="d-block" id="wrapper-hour1"></strong>
          </div>

          <div className="col-2">
            <strong className="d-block mb-2" id="wrapper-time2"></strong>
            <img id="wrapper-icon-hour2" src="" className="" alt="" />
            <strong className="d-block" id="wrapper-hour2"></strong>
          </div>

          <div className="col-2">
            <strong className="d-block mb-2" id="wrapper-time3"></strong>
            <img id="wrapper-icon-hour3" src="" className="" alt="" />
            <strong className="d-block" id="wrapper-hour3"></strong>
          </div>

          <div className="col-2">
            <strong className="d-block mb-2" id="wrapper-time4"></strong>
            <img id="wrapper-icon-hour4" src="" className="" alt="" />
            <strong className="d-block" id="wrapper-hour4"></strong>
          </div>

          <div className="col-2">
            <strong className="d-block mb-2" id="wrapper-time5"></strong>
            <img id="wrapper-icon-hour5" src="" className="" alt="" />
            <strong className="d-block" id="wrapper-hour5"></strong>
          </div>
        </div>
      </div>
    </>
  );
}
