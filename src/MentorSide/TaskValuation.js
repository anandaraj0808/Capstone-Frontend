import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
function TaskValuation() {
  const history = useHistory();

  return (
    <div>
      <div class="card">
        <div class="card-body text-left task-valuation">
          <Button
            className="mb-5"
            color="error"
            variant="outlined"
            onClick={() => history.push("/asigenTask")}
          >
            {" "}
            Home
          </Button>
          <span className="fs-1 d-flex justify-content-around text-light valuate-task">
            {" "}
            Valuate Task{" "}
          </span>
        </div>
      </div>
      <div className="box-asign-task">
        <div className="container form-cont  ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-7 d-flex justify-content-center flex-column align-items-center flex-colu  ">
              <h2 className="text-center text-light"> Valuate Task </h2>
              <div className=" row mt-5 mb-5 border border-danger border-1">
                Display task here
              </div>
              <TextField
                style={{ width: "100%" }}
                className="mb-5"
                label="Task_Id"
                type="text"
              />{" "}
              <br />
              <TextField
                style={{ width: "100%" }}
                className="mb-5"
                label="Taks Link Here"
                type="text"
              />
              <Button className="mb-5" variant="outlined">
                {" "}
                Valuate{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskValuation;
