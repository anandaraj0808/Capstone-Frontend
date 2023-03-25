import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function NavMain() {
  const history = useHistory();

  return (
    <div className="page container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg col-sm-12 col-md-12 col-lg-12 text-info nav_bg_cent">
          <div className="container-fluid pt-2 pb-2">
            <Link to="/carosel">
              {" "}
              <i
                className="fa fa-4x fa-free-code-camp text-danger"
                aria-hidden="true"
              >
                {" "}
                CENTERAL LOGIN{" "}
              </i>{" "}
            </Link>
            <button
              className="navbar-toggler dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                {" "}
                <i class="fa fa-bars fa-2x fa-tog" aria-hidden="true"></i>{" "}
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item fs-4 text txt-clr ms-5">
                  <a className="nav-link active " aria-current="page">
                    <Link to="/adminLogin">
                      {" "}
                      <i class="fa fa-cog text-danger" aria-hidden="true">
                        {" "}
                        Admin Login{" "}
                      </i>
                    </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active fs-4 text txt-clr ms-5"
                    aria-current="page"
                    href="#"
                  >
                    <Link to="/mentorLogin">
                      {" "}
                      <i class="fa fa-user-circle text-dark" aria-hidden="true">
                        {" "}
                        Mentor Login{" "}
                      </i>
                    </Link>
                  </a>
                </li>

                <li className="nav-item" onClick={() => history.pushState}>
                  <a
                    className="nav-link active fs-4 text txt-clr ms-5"
                    aria-current="page"
                    href="#"
                  >
                    <Link to="/student/login">
                      {" "}
                      <i
                        class="fa fa-book text-dark text-primary"
                        aria-hidden="true"
                      >
                        {" "}
                        Students Login{" "}
                      </i>{" "}
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavMain;
