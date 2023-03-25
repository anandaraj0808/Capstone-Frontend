import { Details } from "@mui/icons-material";
import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import { mentors } from "./MentorAPI";
import { useHistory } from "react-router-dom";
function GetMentorMain() {
  const history = useHistory();
  const [mentor, setMentors] = useState([]);

  const getMentors = () => {
    fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/mentors", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setMentors(response));
  };

  useEffect(() => getMentors(), []);

  return (
    <div className="container-fluid alert mentor-main">
      <div className="row d-flex justify-content-center">
        <div class="card mentor-list mb-5">
          <div class="card bg-transparent">
            <div class="card-body text-left ">
              <Button
                className="mb-5 bg-danger text-dark"
                variant="outlined"
                onClick={() => history.push("/adminMainPage")}
              >
                {" "}
                Home
              </Button>
              <span className="fs-1 d-flex justify-content-around text-left asign-cd">
                {" "}
                Asign Mentors{" "}
              </span>
            </div>
          </div>
        </div>
        {mentor.map(({ mentor_id, profile_pic, name, email }) => (
          <GetMentor
            mentor_id={mentor_id}
            email={email}
            name={name}
            profile_pic={profile_pic}
          />
        ))}
      </div>
    </div>
  );
}

function GetMentor({ mentor_id, name, profile_pic, email }) {
  return (
    <div className="col-sm-5 col-md-5 col-lg-5">
      <div class="card each-card">
        <div class="card-body row d-flux justify-content-between">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="img-card-ment img-fluid" src={profile_pic} />
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8 mentor-detail">
            <h2 className="text-secondary text-light"> {mentor_id} </h2>
            <h2 className="text-secondary text-light"> {name} </h2>

            <h4 className="text-secondary text-light"> {email} </h4>
            <Button color="error"> Add Students </Button>
          </div>
          {/* <Button> <span className="text-danger"> Asigen Student </span> </Button> */}
        </div>
      </div>
    </div>
  );
}

export default GetMentorMain;
