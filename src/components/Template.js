import React, { useState } from "react";

const Template = ({role,setIsLogin}) => {
  const [role, setRole] = useState(""); // state added

  return (
    <div>
      <label>Select Designation:</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">-- Select Role --</option>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
    
    <label>
        <p>Enter the email<sup className="text-red-500">*</sup></p>
        <input
        required
        type={text}
        value={formData.email}></input>
    </label>

    
    </div>
  );
};

export default Template;