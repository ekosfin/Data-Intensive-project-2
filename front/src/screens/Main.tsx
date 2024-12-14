import React, { FC, useState } from "react";
import "../App.css";
import { Role, User, Office } from "../components";
import { useDetails } from "../hooks";

export const Main: FC = () => {
  const [ office, setOffice ] = useState('germany');
  const { users, roles, offices } = useDetails();

  return (
    <div className="App">
      <header className="App-header">
        <p>Selected office: {office}</p>
        <div className="button-container">
          <button onClick={() => setOffice("germany")}>Germany</button>
          <button onClick={() => setOffice("ireland")}>Ireland</button>
        </div>
      </header>
      <div className="content-container">
      <span className="title">Offices</span>
        <div className="container">
          {offices.map((entry) => (
            <Office key={entry.officeid} {...entry} />
          ))}
        </div>
        <span className="title">Roles</span>
        <div className="container">
          {roles.map((entry) => (
            <Role key={entry.roleid} {...entry} />
          ))}
        </div>
        <span className="title">Users</span>
        <div className="container wrap">
          {Array.from(users).map(([key, value]) => (
            <User key={key} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
}
