import "../styles/homepage.css";

function Homepage() {
  return (
    <div id="homepage-container">
      <header>
        <h1 id="website-name">
          Folio<span>flow</span>.
        </h1>
        <span id="links">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">TESTIMONIALS</a>
          <a href="">CONTACT</a>
        </span>
      </header>
      <section>
        <div className="row welcome">
          <h1>
            Elevate Your Professional Profile:
            <br />
            Build Your Portfolio with Ease
          </h1>
          <p>
            Looking to showcase your professional achievements and take your
            career to new heights? Look no further than our portfolio
            application! Designed with professionals like you in mind, our
            platform offers a seamless way to create and customize your own
            portfolio.
          </p>
          <button>
            Start a new Project Today
            <i className="material-icons">arrow_forward</i>
          </button>
        </div>
        <div className="row services">
          <span>
            <h1>
              Unleash Your Potential with Our <br />
              Comprehensive Services
            </h1>
            <p>
              Our premium services are designed to help you reach new heights of
              success. With a focus on innovation, efficiency, and results, we
              offer a range of solutions tailored to your unique needs.
            </p>
          </span>
          <div className="service">
            <div className="service-card-one"></div>
            <div className="service-card"></div>
            <div></div>
          </div>
          <div className="service"></div>
        </div>
      </section>
    </div>
  );
}
export default Homepage;
