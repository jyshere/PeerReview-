import React from "react";
import StudentDashboard from "../pages/StudentDashboard";
import InstructorDashboard from "../pages/InstructorDashboard";

const Dashboard = () => {
  const accountType = localStorage.getItem("accountType");

  // 🔍 debug (optional)
  console.log("Account Type:", accountType);

  if (accountType === "student") {
    return <StudentDashboard />;
  } else if (accountType === "instructor") {
    return <InstructorDashboard />;
  } else {
    return <div>No role found</div>; // fallback
  }
};

export default Dashboard;