import React from "react";
import NavMain from "../Login Pages/MainPageNav";

function Carosel() {
  return (
    <div className="container-fluid overal-div">
      <NavMain />

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="carosel-height"
              src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              className="carosel-height1"
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              className="carosel-height2"
              src="https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section className="section my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading ">
                Our company
                <div className="underline uline mx-auto"></div>
                <p className="carosel-txt-size">
                  GUVI Geek Network Private Limited provides Internet based
                  services. The Company offers an online technical learning
                  platform in native language for students, mentors, and
                  recruiters. GUVI Geek Network serves customers in India.GUVI
                  IDE is an Integrated Development Environment that lets you
                  write, edit, run, test & debug your code.A trust worthy
                  education platform, they ensure that they provide what they
                  commit to us especially in ZEN class. Learning is made easy
                  here as their teaching techniques are unique. Guvi is one of
                  the worst platform.
                </p>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="section bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">
                  Vision, Mission and Values
                  <div className="underline mx-auto"></div>{" "}
                </h3>
              </div>

              <div className="col-md-4 text-center">
                <h6> Our Vision </h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div className="col-md-4 text-center">
                <h6> Our Mission </h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div className="col-md-4 text-center">
                <h6> Our Core Value</h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="section bg-c-light border-top my-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Our Services</h3>
                <div className="underline mx-auto"></div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src="https://c0.wallpaperflare.com/preview/582/582/536/school-coding-software-development-education.jpg"
                    className="w-100 border-bottom"
                    alt="services"
                  />
                  <div className="card-body">
                    <h6> Services 1 </h6>
                    <div className="underline"> </div>
                    <p>Tasks allotments & Query support</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="w-100 border-bottom"
                    alt="services"
                  />
                  <div className="card-body">
                    <h6> Services 2 </h6>
                    <div className="underline"> </div>
                    <p>Code practising platform</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src="https://c0.wallpaperflare.com/preview/259/624/904/software-development-guest-post-content-writing-cybersecurity.jpg"
                    className="w-100 border-bottom"
                    alt="services"
                  />
                  <div className="card-body">
                    <h6> Services 3 </h6>
                    <div className="underline"> </div>
                    <p>Mentorship support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Carosel;
