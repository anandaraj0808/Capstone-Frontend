import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
function StudentsMain() {
  const history = useHistory();

  const data = [
    {
      id: "1",
      zen_id: "Guvi-stu_1",
      profile_pic: "https://avatars.githubusercontent.com/u/89139024?v=4",
      name: "GowthamKumar V",
      email: "vgowtham.kumar8@gmail.com",
    },
    {
      id: "2",
      zen_id: "Guvi-stu_2",
      profile_pic:
        "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "rajkumar K",
      email: "Raj.kumar007@gmail.com",
    },
    {
      id: "3",
      zen_id: "Guvi-stu_3",
      profile_pic:
        "https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      name: "shiva kumar A",
      email: "shiv8072@gmail.com",
    },
    {
      id: "4",
      zen_id: "Guvi-stu_4",
      profile_pic:
        "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627",
      name: "deva raj K",
      email: "deva89@gmail.com",
    },
    {
      id: "5",
      zen_id: "Guvi-stu_5",
      profile_pic:
        "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627",
      name: "karthik P",
      email: "karthi23@gmail.com",
    },
    {
      id: "6",
      zen_id: "Guvi-stu_6",
      profile_pic:
        "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "ragavendra N",
      email: "karthi23@gmail.com",
    },
    {
      id: "7",
      zen_id: "Guvi-stu_7",
      profile_pic:
        "https://images.unsplash.com/photo-1517530094915-500495b15ade?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Jeffery B",
      email: "jeffb86@gmail.com",
    },
    {
      id: "8",
      zen_id: "Guvi-stu_8",
      profile_pic:
        "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "john H",
      email: "john001@gmail.com",
    },
    {
      id: "9",
      zen_id: "Guvi-stu_9",
      profile_pic:
        "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Dani B",
      email: "dan88@gmail.com",
    },
    {
      id: "10",
      zen_id: "Guvi-stu_10",
      profile_pic:
        "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Lara B",
      email: "lara54@gmail.com",
    },
    {
      id: "11",
      zen_id: "Guvi-stu_11",
      profile_pic:
        "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Christy D",
      email: "Chrish77@gmail.com",
    },
    {
      id: "12",
      zen_id: "Guvi-stu_12",
      profile_pic:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Jenny H",
      email: "jen85@gmail.com",
    },
    {
      id: "13",
      zen_id: "Guvi-stu_13",
      profile_pic:
        "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688",
      name: "Jasmine A",
      email: "jasmine92@gmail.com",
    },
    {
      id: "14",
      zen_id: "Guvi-stu_14",
      profile_pic:
        "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Shofia B",
      email: "sofi72@gmail.com",
    },
    {
      id: "15",
      zen_id: "Guvi-stu_15",
      profile_pic:
        "https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Neha M",
      email: "lilly57@gmail.com",
    },
    {
      id: "16",
      zen_id: "Guvi-stu_16",
      profile_pic:
        "https://images.unsplash.com/photo-1510696089168-f1d31149bdde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      name: "Annu C",
      email: "lilly57@gmail.com",
    },
    {
      id: "17",
      zen_id: "Guvi-stu_17",
      profile_pic:
        "https://images.unsplash.com/photo-1524701208119-e91fc2e4c8e5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
      name: "Jenisha O",
      email: "lilly57@gmail.com",
    },
    {
      id: "18",
      zen_id: "Guvi-stu_18",
      profile_pic:
        "https://images.unsplash.com/photo-1613365765813-e29fea16ecaa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixzen_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765",
      name: "Sonia H",
      email: "lilly57@gmail.com",
    },
  ];

  return (
    <div className="container-fluid alert students-main">
      <div className="row d-flex justify-content-center">
        <div className="card border-3 student-list mb-5">
          <div class="card bg-transparent">
            <div className="card-body text-left ">
              <Button
                className="mb-5 text-warning"
                color="warning"
                variant="outlined"
                onClick={() => history.push("/asigenTask")}
              >
                {" "}
                Home
              </Button>
              <span className="fs-1 d-flex justify-content-around text-left asign-cd text-warning">
                {" "}
                Students List{" "}
              </span>
            </div>
          </div>
        </div>
        {data.map((element) => (
          <Students
            name={element.name}
            zen_id={element.zen_id}
            email={element.email}
            profile_pic={element.profile_pic}
          />
        ))}
      </div>
    </div>
  );
}

function Students({ name, zen_id, email, profile_pic }) {
  return (
    <div className="col-sm-5 col-md-5 col-lg-5 ">
      <div className="card each-card">
        <div className="card-body row d-flux justify-content-between">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="img-card img-fluid" src={profile_pic} />
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 stu-detail">
            <h2 className="text-secondary text-light"> {name} </h2>
            <h4 className="text-secondary text-light"> {zen_id} </h4>
            <h4 className="text-secondary text-light"> {email} </h4>
          </div>
          <Button> View Profile </Button>
        </div>
      </div>
    </div>
  );
}

export default StudentsMain;
