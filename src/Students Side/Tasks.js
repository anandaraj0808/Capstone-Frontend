import { Task } from "@mui/icons-material";
import React from "react";

function Tasks() {
  return (
    <div>
      <div class="card alert alert-warning ">
        <h1 class="card-body py-0"> Task Submissions </h1>
      </div>
      <div className="row d-flex justify-content-center">
        <div class="card col-8">
          <div class="card-body d-flex justify-content-between">
            <div>
              <h2> Gowtham Kumar V </h2> <h5> Topic Name </h5>
            </div>
            <div>
              <h5> Submitted Date </h5>
              <h5> Marks Alloted </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
