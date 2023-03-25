import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AdminDashBoard from "../Admin/AdminDashBoard";
function AdminLogin() {
  const history = useHistory();

  //? Sign In State Management

  const [mail,setMail]=useState("")

  const [loginPassword,setloginPassword]=useState("")

   const [check,setCheck]=useState("")
  //? SignUp state management

  const [name, setName] = useState("");
  const [surName, setsurName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-fluid admin-entire-page">
      <div class="card-fluid">
        <div class="card-body">
          <i
            className="fa fa-4x fa-free-code-camp text-danger"
            aria-hidden="true"
            onClick={() => history.push("/carosel")}
          >
            {" "}
            Zen Admin{" "}
          </i>
        </div>
      </div>

      <div className="row admin-page-height ">
        {/* Page 1   */}
        <div className="col-lg-7 admin-page-1">
          {/* LOGIN BOX */}

          <div className="row admin-login-background">
            <div className="col  login-box d-flex justify-content-center align-items-center">
              <div className="row   admin-text-field">
                <div className="d-flex justify-content-center ">
                  {" "}
                  <h2 style={{ color: "#e81700" }}> Admin Login </h2>{" "}
                </div>
                <TextField
                type="text"
                  id="outlined-basic"
                  label="Admin - EMail"
                  variant="filled"
                  color="error"
                  onChange={(event)=>setMail(event.target.value)}
                />

                <TextField
                type="password"
                  id="outlined-basic"
                  label="Admin - Password"
                  variant="filled"
                  color="error"
                  onChange={(event)=>setloginPassword(event.target.value)}
                />

                <Button
                  // onClick={() => history.push("/adminMainPage")}
                  onClick={()=>{
                    fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/movies").then(res=>res.json()).then((response)=>{
                      const isActiv = response.filter((element)=>{
                        return element.email === mail
                      })
         const loginPermission = isActiv[0].permission;
         const email = isActiv[0].email;
         const passWord = isActiv[0].password;
         
           if(passWord===loginPassword && email === mail && loginPermission ){
               alert("login successful")
               history.push("/adminMainPage")
           }else{
            alert("Kindly contact Zen organisation to activate account");
           }
        //    alert("Kindly contact Zen organisation to activate account");
        //  }
                    })
                  }}
                  variant="contained"
                  style={{ height: "41px", color: "black", background: "red" }}
                >
                  {" "}
                  Sign In{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* ADMIN SIGNUP PAGE  */}
        <div className="col-lg-5 admin-page-2">
          <div className="row admin-login-background">
            <div className="col  login-box d-flex justify-content-center align-items-center">
              <div className="row   signup-admin-text-field">
                <div className="d-flex justify-content-center ">
                  {" "}
                  <h2 style={{ color: "#e81700" }}> Admin SignUp </h2>{" "}
                </div>

                <TextField
                  type="text"
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="First name"
                  variant="filled"
                  color="error"
                  onChange={(event) => setName(event.target.value)}
                />

                <TextField
                  type="text"
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="Sur-name"
                  variant="filled"
                  color="error"
                  onChange={(event) => setsurName(event.target.value)}
                />

                <TextField
                  type="email"
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="E-mail"
                  variant="filled"
                  color="error"
                  onChange={(event) => setEmail(event.target.value)}
                />

                <TextField
                  type="number"
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="Contact No"
                  variant="filled"
                  color="error"
                  onChange={(event) => setContact(event.target.value)}
                />

                <TextField
                  type="password"
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="Password"
                  variant="filled"
                  color="error"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <Button
                  variant="contained"
                  onClick={() => {
                    const signUpData = {
                      name: name,
                      surName: surName,
                      contact: contact,
                      email: email,
                      password: password,
                    };
                    fetch(
                      "https://6228d2bb9fd6174ca8308614.mockapi.io/movies",
                      {
                        method: "POST",
                        body: JSON.stringify(signUpData),
                        headers: { "content-type": "application/json" },
                      }
                    );
                  }}
                  style={{
                    height: "41px",
                    color: "black",
                    background: "red",
                    marginTop: "20px",
                  }}
                >
                  {" "}
                  Sign Up{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
