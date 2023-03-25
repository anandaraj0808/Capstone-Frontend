import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
function EditStudents() {
  const styles = { width: "575px" };

  const { id } = useParams();

  const history = useHistory();

 //! State management for getting data from api  

  const [data, setData] = useState(null); 

  // console.log(id);

  useEffect(() => {
    fetch(`https://6228d2bb9fd6174ca8308614.mockapi.io/students/${id}`)
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  }, [id]);

  // useEffect(() => {
  //   console.log("test");
  // }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //! Editing students details using PUT method

  const handleSubmit = () => {
    fetch(`https://6228d2bb9fd6174ca8308614.mockapi.io/students/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => history.push("/getStudents"));
    // setData(data).then(()=>history.push("/getStudents"))
  };

  console.log(data);

  // const[zen_id,setZen_id]=useState(data.zen_id);
  // const[name,setName]=useState(data.name);
  // const[email,setEmail]=useState(data.email);
  // const[image,setImage]=useState(data.profile_pic);
  //  const[password,setPassword]=useState("");

  return (
    <div className="border  crt-stu-bg">
      <div className="container border mt-5 frm-bx ">
        <h1 className="text-center text-warning"> Edit Students </h1>
        <div className="row justify-content-center mt-5 ">
          <div className="col-7 d-flex flex-column mt-5 text-light">
            <TextField
              type="text"
              name="zen_id"
              value={data?.zen_id || ""}
              id="standard-basic"
              error
              label="Student-ID"
              className="mb-5"
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              type="text"
              name="name"
              value={data?.name || ""}
              id="standard-basic"
              error
              secondary
              label="Name"
              className="mb-5"
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              type="email"
              name="email"
              value={data?.email || ""}
              id="standard-basic"
              error
              secondary
              label="Email"
              className="mb-5"
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              type="url"
              name="image"
              value={data?.profile_pic || ""}
              id="standard-basic"
              error
              secondary
              label="Image-URL"
              className="mb-5"
              variant="outlined"
              onChange={handleChange}
            />

            {/* <TextField type="password" value={password} id="standard-basic" error secondary label="Password" className="text-light mb-5" variant="outlined" onChange={(event)=>setPassword(event.target.value)}/> */}

            <Button
              className="mt-3 mb-5"
              variant="outlined"
              color="error"
              onClick={handleSubmit}
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

export default EditStudents;
