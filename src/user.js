// import userEvent from "@testing-library/user-event";
import React from "react";
import "./user.css";
const User = (props) => {
  const { data } = props;
  return (
    <div className="outer">
      <h1 className="h1">user Component</h1>
      <h2 className="h2">{data.name}</h2>
      <h2 className="h2">{data.age}</h2>
    </div>
  );
};

export default User;
