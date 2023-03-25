import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";


function MainGetStudent() {
  // const students = [
  //   {
  //     id: "Guvi-stu_1",
  //     profile_pic: "https://avatars.githubusercontent.com/u/89139024?v=4",
  //     name: "GowthamKumar V",
  //     Email: "vgowtham.kumar8@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_2",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "rajkumar K",
  //     Email: "Raj.kumar007@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_3",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
  //     name: "shiva kumar K",
  //     Email: "shiv8072@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_4",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627",
  //     name: "deva raj K",
  //     Email: "deva89@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_5",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627",
  //     name: "karthik P",
  //     Email: "karthi23@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_6",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "ragavendra N",
  //     Email: "karthi23@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_7",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1517530094915-500495b15ade?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Jeffery B",
  //     Email: "jeffb86@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_8",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "john H",
  //     Email: "john001@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_9",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Dani B",
  //     Email: "dan88@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_10",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Lara B",
  //     Email: "lara54@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_11",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Christy D",
  //     Email: "Chrish77@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_12",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Jenny H",
  //     Email: "jen85@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_13",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688",
  //     name: "Jasmine J",
  //     Email: "jasmine92@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_14",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Shofia L",
  //     Email: "sofi72@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_15",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Neha M",
  //     Email: "lilly57@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_16",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1510696089168-f1d31149bdde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
  //     name: "Annu C",
  //     Email: "lilly57@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_17",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1524701208119-e91fc2e4c8e5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
  //     name: "Jenisha O",
  //     Email: "lilly57@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_18",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1613365765813-e29fea16ecaa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765",
  //     name: "Sonia H",
  //     Email: "lilly57@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_19",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1601832823286-f4dff34eebc7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626",
  //     name: "Reshma B",
  //     Email: "lilly57@gmail.com",
  //   },
  //   {
  //     id: "Guvi-stu_20",
  //     profile_pic:
  //       "https://images.unsplash.com/photo-1647960316872-3efbc08086f1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764",
  //     name: "Dhivya M",
  //     Email: "lilly57@gmail.com",
  //   },
  // ];

  const history = useHistory();
  const delApi = "https://6228d2bb9fd6174ca8308614.mockapi.io/students";

  //* Deleting student data with the help of Id.

  const delStudent = (id) => {
    fetch(`${delApi}/${id}`, {
      method: "DELETE",
    }).then(() => getStudents());
  };

  const [student, setStudents] = useState([]); // Api data state management (GET Method).
  const [query, setQuery] = useState(""); // Search box state management hook.

  //* Getting all students data by using a GET method.
  const getStudents = () => {
    fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/students", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setStudents(response));
  };
  console.log(student);
  useEffect(() => getStudents(), []);

  return (
    <div>
      <div class="card-body d-flex justify-content-between">
        <i
          className="fa fa-4x fa-free-code-camp text-danger"
          aria-hidden="true"
          onClick={() => history.push("/adminMainPage")}
        >
          {" "}
          Zen Students List{" "}
        </i>

        {/* Search box state management hook */}

        <TextField
          label="Search Name"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <table class="table table-dark  table-responsive">
        <thead className="table-responsive">
          <tr>
            <th scope="col"> Sl.No </th>
            <th scope="col">Students ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"> Edit </th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {student
            .filter((filt) => filt.name.toLowerCase().includes(query))
            .map(({ id, zen_id, name, email }) => (
              <tr>
                <th scope="row"> {id} </th>
                <td> {zen_id} </td>
                <td> {name} </td>
                <td> {email} </td>
                <td>
                  {" "}
                  <IconButton
                    onClick={() => history.push(`/Student/edit/${id}`)}
                    aria-label="delete"
                    size="large"
                  >
                    {" "}
                    <EditIcon style={{ color: "#0d6efd" }} fontSize="inherit" />
                  </IconButton>
                </td>
                <td>
                  <IconButton
                    aria-label="delete"
                    onClick={() => delStudent(id)}
                    size="large"
                  >
                    <DeleteIcon style={{ color: "red" }} fontSize="inherit" />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainGetStudent;
