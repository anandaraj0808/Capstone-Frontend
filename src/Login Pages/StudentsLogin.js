import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function StudentsLogin() {
  const history = useHistory();

  return (
    <div className="container-fluid entire-page">
      <div className="row page-height ">
        {/* Page 1   */}
        <div className="col-lg-6 page-1">
          <Link to="/carosel">
            {" "}
            <i
              className="fa fa-4x fa-free-code-camp"
              id="icon"
              aria-hidden="true"
            >
              {" "}
              Zen class{" "}
            </i>{" "}
          </Link>

          {/* LOGIN BOX */}

          <div className="row">
            <div className="col  login-box d-flex justify-content-center align-items-center">
              <div className="row   signin-text-field">
                <div className="d-flex justify-content-center">
                  {" "}
                  <h1 style={{ color: "rgb(123, 31, 162)" }}> Sign In </h1>{" "}
                </div>

                <TextField
                  id="outlined-basic"
                  type="email"
                  label="E-Mail"
                  variant="filled"
                />

                <TextField
                  id="outlined-basic"
                  type="password"
                  label="Password"
                  variant="filled"
                />

                <Button
                  onClick={() => history.push("/student/dashboard")}
                  color="secondary"
                  variant="contained"
                  style={{ height: "45px" }}
                >
                  {" "}
                  Sign In{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Page 2   */}
        <div className="col-lg-6  d-flex justify-content-center page-2">
          <div className="row  signup-text-field ">
            <div className="d-flex justify-content-center">
              {" "}
              <h1 style={{ color: "rgb(123, 31, 162)" }}> Sign Up </h1>{" "}
            </div>

            <TextField
              style={{ marginTop: "15px" }}
              id="outlined-basic"
              label="First name"
              variant="filled"
              color="secondary"
            />

            <TextField
              style={{ marginTop: "15px" }}
              id="outlined-basic"
              label="Second name"
              variant="filled"
              color="secondary"
            />

            <TextField
              style={{ marginTop: "15px" }}
              type="email"
              id="outlined-basic"
              label="Email"
              variant="filled"
              color="secondary"
            />

            <TextField
              style={{ marginTop: "15px" }}
              type="password"
              id="outlined-basic"
              label="Password"
              variant="filled"
              color="secondary"
            />

            <TextField
              style={{ marginTop: "15px" }}
              type="password"
              id="outlined-basic"
              label="Conform Password"
              variant="filled"
              color="secondary"
            />

            <Button
              color="secondary"
              variant="contained"
              style={{ height: "45px", marginTop: "20px" }}
            >
              {" "}
              Sign Up{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsLogin;
