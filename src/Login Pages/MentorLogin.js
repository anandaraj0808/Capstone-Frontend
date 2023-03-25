import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
function MentorLogin() {
  const history = useHistory();
  return (
    <div className="container-fluid mentor-entire-page">
      <div className="row mentor-page-height ">
        {/* Page 1   */}
        <div className="col-lg-6 mentor-page-1">
          <i
            class="fa fa-4x fa-free-code-camp"
            id="icon"
            aria-hidden="true"
            onClick={() => history.push("/carosel")}
          >
            {" "}
            Zen class{" "}
          </i>

          {/* LOGIN BOX */}

          <div className="row">
            <div className="col  mentor-login-box d-flex justify-content-center align-items-center">
              <div className="row   mentor-signin-text-field">
                <div className="d-flex justify-content-center">
                  {" "}
                  <h1 style={{ color: "rgb(85, 0, 255)" }}>
                    {" "}
                    Mentor Login{" "}
                  </h1>{" "}
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
                  onClick={() => history.push("/asigenTask")}
                  variant="contained"
                  style={{ height: "45px", backgroundColor: "rgb(85, 0, 255)" }}
                >
                  {" "}
                  Sign In{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Page 2   */}
        <div className="col-lg-6  d-flex justify-content-center mentor-page-2">
          <div className="row  mentor-signup-text-field ">
            <div className="d-flex justify-content-center">
              {" "}
              <h1 style={{ color: "rgb(232, 0, 0)" }}>
                {" "}
                Register Mentorship{" "}
              </h1>{" "}
            </div>

            <TextField
              style={{ marginTop: "15px" }}
              color="error"
              type="text"
              id="outlined-basic"
              label="First name"
              variant="filled"
            />

            <TextField
              style={{ marginTop: "15px" }}
              color="error"
              type="text"
              id="outlined-basic"
              label="Second name"
              variant="filled"
            />

            <TextField
              style={{ marginTop: "15px" }}
              color="error"
              type="email"
              id="outlined-basic"
              label="Email"
              variant="filled"
            />

            <TextField
              style={{ marginTop: "15px" }}
              color="error"
              type="password"
              id="outlined-basic"
              label="Password"
              variant="filled"
            />

            <TextField
              style={{ marginTop: "15px" }}
              color="error"
              type="password"
              id="outlined-basic"
              label="Conform Password"
              variant="filled"
            />

            <Button
              variant="contained"
              style={{
                height: "45px",
                marginTop: "20px",
                backgroundColor: "rgb(85, 0, 255)",
              }}
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

export default MentorLogin;
