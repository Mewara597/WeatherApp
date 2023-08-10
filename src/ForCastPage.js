import LayoutFirst from "./components/LayoutFirst";
// import SecondLayout from "./components/SecondLayout";
// import ThirdLayout from "./components/ThirdLayout";

export default function ForcastPage({ props }) {
  console.log(props);
  let url = "https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp";

  return (
    <>
      <section className="vh-100">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-7 col-xl-5">
              <div
                id="wrapper-bg"
                className="card text-white bg-image shadow-4-strong"
                // style="background-image: url('img/clouds.gif')"
                style={{ backgroundImage: `url(${url})` }}
              >
                {/* <!-- Main current data --> */}

                <LayoutFirst data={props} />

                {/* <!-- Hourly forecast --> */}

                {/* <SecondLayout /> */}

                {/* <!-- Daily forecast --> */}

                {/* <ThirdLayout /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
