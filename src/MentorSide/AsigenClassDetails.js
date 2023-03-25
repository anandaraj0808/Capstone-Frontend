import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
function AsigenClassDetails() {
  const history = useHistory();

  return (
    <div>
      <div class="card">
        <div class="card-body text-left ">
          <Button
            className="mb-5"
            variant="outlined"
            onClick={() => history.push("/asigenTask")}
          >
            {" "}
            Home
          </Button>
          <span className="fs-1 d-flex justify-content-around text-left asign-cd">
            {" "}
            Asign Class Details{" "}
          </span>
        </div>
      </div>

      <div className="box box1">
        <div className="container form-cont  ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-7 d-flex justify-content-center flex-column align-items-center flex-colu  ">
              <h2 className="text-center text-primary"> Asign Class Details</h2>

              <TextField
                style={{ width: "100%" }}
                className="mb-5"
                label="Header with date and heading"
                type="text"
              />

              <TextField
                style={{ width: "100%" }}
                className="mb-5"
                label="Class topic's here"
                type="text"
              />

              <TextField
                style={{ width: "100%" }}
                className="mb-5"
                label="Preread"
                type="text"
              />

              <TextField
                style={{ width: "100%" }}
                className="mb-5"
                label="Taks Link Here"
                type="text"
              />

              <Button className="mb-5" variant="outlined">
                Create Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsigenClassDetails;
