import React from "react";
import IconButton from "@mui/material/IconButton";
import RoadMap from "./RoadMap";

//* Road Map Box
export function RmbMain() {
  const numbers = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
    { id: "20" },
    { id: "21" },
    { id: "22" },
    { id: "23" },
    { id: "24" },
    { id: "25" },
    { id: "26" },
    { id: "27" },
    { id: "28" },
    { id: "29" },
    { id: "30" },
    {
      AdditionalSessions: [
        { AdditionalSession: "1" },
        { AdditionalSession: "2" },
        { AdditionalSession: "3" },
        { AdditionalSession: "4" },
        { AdditionalSession: "5" },
        { AdditionalSession: "6" },
        { AdditionalSession: "7" },
        { AdditionalSession: "8" },
        { AdditionalSession: "9" },
      ],
    },
  ];
  return (
    <div>
      {numbers.map(({ id, AdditionalSessions }) => (
        <RmbSub numb={id} As={AdditionalSessions} />
      ))}
    </div>
  );
}

export function RmbSub({ numb }) {
  return (
    <div className="d-flex flex-column" style={{ backgroundColor: "#333333" }}>
      <IconButton
        style={{
          backgroundColor: "#333333",
          color: "#ffffff",
          paddingTop: "15px",
          border: "none",
        }}
      >
        {" "}
        {numb}{" "}
      </IconButton>
    </div>
  );
}
