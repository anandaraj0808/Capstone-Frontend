//   Here We create a Student

import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import CreateStudent from "./CreateStudent";
import AdminDashBoard from "./AdminDashBoard";
import { useHistory } from "react-router-dom";
function AdminMainPage() {
  const history = useHistory();

  return (
    <div className="page container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg col-sm-12 col-md-12 col-lg-12 text-info nav_bg_admin">
          <div className="container-fluid pt-2 pb-2">
            <i
              className="fa fa-4x fa-free-code-camp text-danger"
              aria-hidden="true"
              onClick={() => history.push("/adminLogin")}
            >
              {" "}
              Zen Admin{" "}
            </i>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item fs-4 text txt-clr ms-5">
                  <a className="nav-link active " aria-current="page">
                    <Link to="/addMentor"> Add Mentor </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active fs-4 text txt-clr ms-5"
                    aria-current="page"
                    href="#"
                  >
                    <Link to="/addStudent"> Add Student </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active fs-4 text txt-clr ms-5"
                    aria-current="page"
                    href="#"
                  >
                    <Link to="/getMentor"> Mentors </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active fs-4 text txt-clr ms-5"
                    aria-current="page"
                    href="#"
                  >
                    <Link to="/getStudents"> Students </Link>
                  </a>
                </li>
              </ul>

              <div className="d-flex ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="fs-5 text">
                      {" "}
                      <b> GOWTHAM KUMAR V </b>{" "}
                      <img
                        className="mx-2"
                        id="nav-img"
                        src="https://scontent.fcjb7-1.fna.fbcdn.net/v/t39.30808-1/266817623_4221111427988571_5347135749641664551_n.jpg?stp=c0.5.200.200a_dst-jpg_p200x200&_nc_cat=104&ccb=1-6&_nc_sid=7206a8&_nc_ohc=mG8X6Kf998AAX9Tn9XC&_nc_oc=AQmxWFCy8Vw3DGA0LgdkHqfSRGgftzd77MLzlOAolnfURX0aio_7MLDF0QSEgtUSQn4&_nc_ht=scontent.fcjb7-1.fna&oh=00_AT8fa4XeoyjC9TIXu9-JfbBfEiBB2UCkqgsnjP8ZvX5RHA&oe=627FF656"
                      />
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li onClick={() => history.push("/adminLogin")}>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <AdminDashBoard />
    </div>
  );
}

export default AdminMainPage;
