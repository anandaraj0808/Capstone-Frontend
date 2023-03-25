import React from "react";
import IconButton from "@mui/material/IconButton";
import { RmbMain } from "./RoadmapBox";

function RoadMap({ addSession }) {
  return (
    <div className="container my-3">
      <div>
        <div className="card">
          <div className="card-header">
            <h2 className="text-muted d-flex justify-content-center">
              {" "}
              Road Map{" "}
            </h2>
          </div>
          {/* Road Map Box  */}
          <div className="card-body">
            <span>
              <RmbMain />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
