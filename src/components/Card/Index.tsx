import imgContainer from "../../assets/img-container.png";

const Card = () => {
  return (
    <div className="row gx-0">
      <div className="col-12 col-xl-6 p-0 order-xl-2 img-wrapper border-radius-top">
        <img
          src={imgContainer}
          alt="image-header"
          className="img-fluid border-radius-top"
        />
      </div>
      <div className="col-12 col-xl-6 d-xl-flex flex-xl-column justify-content-xl-center px-xl-4 card-body">
        <div className="row px-5 pb-4 pt-5">
          <div className="col text-center text-xl-start">
            <h1 className="fw-bold text-white m-0 inter">
              Get <span style={{ color: "hsl(277, 64%, 61%)" }}>inisghts</span>{" "}
              that help your business grow.
            </h1>
          </div>
        </div>
        <div className="row px-5 pb-4 pb-xl-5">
          <div className="col text-center text-xl-start">
            <p className="main-paragraph m-0 inter">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficency.
            </p>
          </div>
        </div>
        <div className="row px-5 flex-column flex-xl-row gy-4 pt-4 pb-5">
          <div className="col text-center text-xl-start">
            <h2 className="fw-bold text-white inter">10k+</h2>
            <p className="stat-heading lexend m-0 ">COMPANIES</p>
          </div>
          <div className="col text-center text-xl-start">
            <h2 className="fw-bold text-white inter">314</h2>
            <p className="stat-heading lexend m-0 ">TEMPLATES</p>
          </div>
          <div className="col text-center text-xl-start">
            <h2 className="fw-bold text-white inter">12M+</h2>
            <p className="stat-heading lexend m-0 ">QUERIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
