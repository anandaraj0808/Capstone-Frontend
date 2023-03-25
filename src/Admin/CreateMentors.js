import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
function CreateMentors() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  return (
    <div>
      <div className="border  crt-ment-bg">
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
              Create Mentor{" "}
            </span>
          </div>
        </div>

        <div className="container border mt-5 frm-bx-ment ">
          <h1 className="text-center text-light"> Create Mentor </h1>
          <div className="row justify-content-center mt-5 ">
            <div className="col-7 d-flex flex-column mt-5 ">
              <TextField
                type="text"
                onChange={(event) => setId(event.target.value)}
                id="standard-basic"
                error
                label="Mentor-ID"
                className="mb-5"
                variant="outlined"
              />

              <TextField
                type="text"
                onChange={(event) => setName(event.target.value)}
                id="standard-basic"
                error
                secondary
                label="Name"
                className="mb-5"
                variant="outlined"
              />

              <TextField
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                id="standard-basic"
                error
                secondary
                label="Email"
                className="mb-5"
                variant="outlined"
              />

              <TextField
                type="url"
                id="standard-basic"
                onChange={(event) => setImage(event.target.value)}
                error
                secondary
                label="Image-URL"
                className="mb-5"
                variant="outlined"
              />

              <TextField
                type="password"
                id="standard-basic"
                onChange={(event) => setPassword(event.target.value)}
                error
                secondary
                label="Password"
                className="mb-5"
                variant="outlined"
              />

              <Button
                className="mt-3 mb-5"
                variant="outlined"
                color="error"
                onClick={() => {
                  const newMentor = {
                    mentor_id: id,
                    name: name,
                    email: email,
                    profile_pic: image,
                    password: password,
                  };

                  fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/mentors", {
                    method: "POST",
                    body: JSON.stringify(newMentor),
                    headers: { "content-type": "application/json" },
                  }).then(() => history.push("/getMentor"));
                }}
              >
                {" "}
                Submit{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMentors;
