import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

function Queries() {
  return (
    <div>
      <div className="card">
        <div className="card-body bg-warning">
          <h1 className="card-title"> Queries </h1>
        </div>
      </div>

      <div className="container">
        <div className="row mt-2">
          <div className="col">
            <div className="card">
              {/* Card */}

              <div className="card-header text-center fs-2 fw-bold text-muted">
                Featured
              </div>
              <div className="card-body ">
                <div className="row">
                  <div className="col col_1">
                    <div className="text-start mt-1 alert alert-primary ">
                      {" "}
                      <span className="chat fs-2 fw-bold"> Hi there </span>{" "}
                      <br /> <div> Date & Time </div>{" "}
                    </div>
                  </div>
                  <div className="col col_1"> </div>
                </div>

                <div className="row">
                  <div className="col col_1">
                    <div className="text-start mt-1 ">
                      {" "}
                      <span className="chat fs-2 fw-bold"> </span>{" "}
                    </div>
                  </div>
                  <div className="col col_1 alert alert-success mt-1">
                    {" "}
                    <span className="chat fs-2 fw-bold">
                      {" "}
                      How are you ?{" "}
                    </span>{" "}
                    <br /> <span> Date & Time </span>{" "}
                  </div>
                </div>

                <div className="row">
                  <div className="col col_1">
                    <div className="text-start mt-1 alert alert-primary">
                      {" "}
                      <span className="chat fs-2 fw-bold"> Iam Fine </span>
                      <br /> <span> Date & Time </span>{" "}
                    </div>
                  </div>
                  <div className="col col_1"> </div>
                </div>

                <div className="row">
                  <div className="col col_1">
                    <div className="text-start mt-1 ">
                      {" "}
                      <span className="chat fs-2 fw-bold"> </span>{" "}
                    </div>
                  </div>
                  <div className="col col_1 alert alert-success mt-1">
                    {" "}
                    <span className="chat fs-2 fw-bold">
                      {" "}
                      What's going on ?{" "}
                    </span>{" "}
                    <br /> <span> Date & Time </span>{" "}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-10">
                    <TextField
                      type="text"
                      className="col-8"
                      id="standard-basic"
                      placeholder="Type a message"
                      variant="standard"
                      style={{
                        width: "100%",
                        padding: "0px",
                        margin: "0",
                        marginTop: "6px",
                        paddingLeft: "10px",
                      }}
                    />
                  </div>

                  <div className=" d-flex justify-content-center col-2 clm">
                    <Button
                      variant="outlined"
                      style={{ backgroundColor: "#1f7d00" }}
                    >
                      {" "}
                      <SendIcon style={{ color: "white" }} />{" "}
                    </Button>
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

export default Queries;
