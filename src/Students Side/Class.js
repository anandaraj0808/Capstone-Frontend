import React from "react";

function Class() {
  return (
    <div>
      <div className="row mt-3 ms-1">
        <div className="col-12">
          <div className="card-body rounded bg-warning card-bdy">
            <h3 className="card-text d-flex justify-content-between text-Dark mb-3 mt-3">
              {" "}
              <h1 className="text-light"> Join the class on time ! </h1>
              {/* Bootstrap Modal Starts */}
              <button
                type="button"
                className="btn btn-primary ps-5 pe-5 py-3"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <h5> Play recording </h5>
              </button>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Today's Recording
                      </h5>
                      <button
                        type="button"
                        className="btn-close btn-danger"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <iframe
                        width="465"
                        height="215"
                        src="https://www.youtube.com/embed/YMCM_XQTTMo"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>

      {/* Content Starts here */}

      <div className="row d-flex justify-content-center mt-4">
        <div className="col-11">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Subject Title Here</h2>
              <h4 className="text-muted"> Date and Time </h4> <hr />
              <p className="card-text"> contents : </p>
              <p className="card-text">Pre-Read</p> <br />
            </div>
          </div>
        </div>
      </div>

      {/* Task Card Starts Here Onwards */}

      <div className="row mt-4">
        <div className="d-flex justify-content-center">
          <div className="card col-11">
            <h3 className="card-header text-primary"> Activities </h3>
            <div className="card-body">
              <h5 className="card-title">CRUD</h5>
              <h4 className="card-text">
                Task - Implement CRUD operation with different UI of admin
                dashboard for Library mangement and use formik for all form
                validations
              </h4>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                {" "}
                Submit{" "}
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        New message
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label
                            for="recipient-name"
                            className="col-form-label"
                          >
                            {" "}
                            Front-End Sourcecode URL{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                          />
                        </div>
                        <div className="mb-3">
                          <label for="message-text" className="col-form-label">
                            Back-End API
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Submit Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
