import imgContainer from "../../assets/img-container.png";

const Card = () => {
  return (
    <div className="row gx-1">
      <div className="col-12 col-xl-6 p-0 order-xl-2 img-wrapper">
        <img
          src={imgContainer}
          alt="image-header"
          className="img-fluid border-radius-top"
        />
      </div>
      <div className="col-12 col-xl-6 d-xl-flex flex-xl-column justify-content-xl-center card-body">
        <div className="row">
          <div className="col text-center text-xl-start">
            <h1 className="fw-bold text-white m-0 inter">
              Get <span style={{ color: "hsl(277, 64%, 61%)" }}>inisghts</span>{" "}
              that help your business grow.
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center text-xl-start">
            <p className="main-paragraph m-0 inter">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficency.
            </p>
          </div>
        </div>
        <div className="row flex-column flex-xl-row">
          <div className="col text-center">
            <h1 className="fw-bold text-white inter">10k+</h1>
            <p className="stat-heading lexend m-0 ">COMPANIES</p>
          </div>
          <div className="col text-center">
            <h1 className="fw-bold text-white inter">314</h1>
            <p className="stat-heading lexend m-0 ">TEMPLATES</p>
          </div>
          <div className="col text-center pb-4">
            <h1 className="fw-bold text-white inter">12M+</h1>
            <p className="stat-heading lexend m-0 ">QUERIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
