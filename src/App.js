import React from "react";
import "./App.css";
import StudentsLogin from "./Login Pages/StudentsLogin";
import AdminLogin from "./Login Pages/AdminLogin";
import MentorLogin from "./Login Pages/MentorLogin";
import DashBoard from "./Students Side/DashBoard";
import Navbar from "./Students Side/Navbar";
import Carosel from "./Home Page/Carosel";
import Class from "./Students Side/Class";
import RoadMap from "./Students Side/RoadMap";
import Tasks from "./Students Side/Tasks";
import Queries from "./Students Side/Queries";
import { Switch, Route } from "react-router-dom";
import StudentsMain from "./MentorSide/Students";
import MentorDetail from "./MentorSide/MentorDetail";
import AsigenTask from "./MentorSide/AsigenTask";
import AdminMainPage from "./Admin/AdminMainPage";
import CreateStudent from "./Admin/CreateStudent";
import CreateMentors from "./Admin/CreateMentors";
import MainGetStudent from "./Admin/GetStudents";
import GetMentorMain from "./Admin/GetMentor";
import AdminDashBoard from "./Admin/AdminDashBoard";
import EditStudents from "./Admin/EditStudents";
import NavMain from "./Login Pages/MainPageNav";
import MentorNavbar from "./MentorSide/MentorNavbar";
import AsigenClassDetails from "./MentorSide/AsigenClassDetails";
import QueriesMentor from "./MentorSide/Queries";
import TaskValuation from "./MentorSide/TaskValuation";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Carosel />
        </Route>

        <Route path="/carosel">
          <Carosel />
        </Route>

        <Route path="/adminLogin">
          <AdminLogin />
        </Route>

        {/*  Complete admin Login */}

        {/* Contains navbar and Dashboard defaultly */}
        <Route path="/adminMainPage">
          <AdminMainPage />
        </Route>

        <Route path="/addMentor">
          <CreateMentors />
        </Route>

        <Route path="/addStudent">
          <CreateStudent />
        </Route>

        <Route path="/getMentor">
          <GetMentorMain />
        </Route>

        <Route path="/getStudents">
          <MainGetStudent />
        </Route>

        <Route path="/Student/edit/:id">
          <EditStudents />
        </Route>

        {/* Complete Mentor login  */}

        <Route path="/mentorLogin">
          <MentorLogin />
        </Route>

        <Route path="/asigenTask">
          <MentorNavbar />
          <AsigenTask />
        </Route>

        <Route path="/asignClassDetails">
          <AsigenClassDetails />
        </Route>

        <Route path="/studentsMain">
          <StudentsMain />
        </Route>

        <Route path="/studentsDetail">
          <MentorDetail />
        </Route>

        <Route path="/taskValuation">
          <TaskValuation />
        </Route>

        <Route path="/MentorQueries">
          <QueriesMentor />
        </Route>

        {/* Complete Students Login */}

        <Route path="/student/login">
          <StudentsLogin />
        </Route>

        <Route path="/student/dashboard">
          <DashBoard />
        </Route>

        <Route path="/student/class">
          <Class />
        </Route>

        <Route path="/student/tasks">
          <Tasks />
        </Route>

        <Route path="/student/roadmap">
          <RoadMap />
        </Route>

        <Route path="/student/queries">
          <Queries />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
