import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
function CreateStudent() {
  const styles = { width: "575px" };

  const [zen_id, setzen_id] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  return (
    <div className="border  crt-stu-bg">
      <div class="card bg-transparent">
        <div class="card-body text-left ">
          <Button
            className="mb-5"
            variant="outlined"
            onClick={() => history.push("/adminMainPage")}
          >
            {" "}
            Home
          </Button>
          <span className="fs-1 d-flex justify-content-around text-left asign-cd">
            {" "}
            Create students{" "}
          </span>
        </div>
      </div>

      <div className="container border mt-5 frm-bx ">
        <h1 className="text-center text-light"> Create Student </h1>
        <div className="row justify-content-center mt-5 ">
          <div className="col-7 d-flex flex-column mt-5 text-light">
            <TextField
              type=""
              id="standard-basic"
              error
              label="Student-ID"
              className="mb-5"
              variant="outlined"
              onChange={(event) => setzen_id(event.target.value)}
            />

            <TextField
              type="text"
              id="standard-basic"
              error
              secondary
              label="Name"
              className="mb-5"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />

            <TextField
              type="email"
              id="standard-basic"
              error
              secondary
              label="Email"
              className="mb-5"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
            />

            <TextField
              type="url"
              id="standard-basic"
              error
              secondary
              label="Image-URL"
              className="mb-5"
              variant="outlined"
              onChange={(event) => setImage(event.target.value)}
            />

            <TextField
              type="password"
              id="standard-basic"
              error
              secondary
              label="Password"
              className="text-light mb-5"
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              className="mt-3 mb-5"
              variant="outlined"
              color="error"
              onClick={() => {
                const newStudent = {
                  zen_id: zen_id,
                  name: name,
                  email: email,
                  image: image,
                };
                fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/students", {
                  method: "POST",
                  body: JSON.stringify(newStudent),
                  headers: { "content-type": "application/json" },
                }).then(() => history.push("/getStudents"));
              }}
            >
              {" "}
              Submit{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStudent;
