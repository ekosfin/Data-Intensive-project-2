import { FC, useState } from "react";
import "../App.css";
import { useDetails } from "../hooks";
import { OfficeResponse } from "../types";
import { CloudView } from "./CloudView";
import { OfficeView } from "./OfficeView";

export const Main: FC = () => {
  const [ office, setOffice ] = useState<OfficeResponse | null>(null);
  const { users, roles, offices } = useDetails();

  return (
    <div className="App">
      <header className="App-header">
        <p>{office ? `Selected office: ${office.name}` : `Select an office`}</p>
        <div className="button-container">
          {offices.map(entry => <button key={entry.officeid} onClick={() => setOffice(entry)}>{entry.name}</button>)}
        </div>
      </header>
      <p>Cloud</p>
      <CloudView users={Array.from(users)} roles={roles} offices={offices} />
      {office != null ? <p>Office</p> : null}
      <OfficeView office={office} users={users} />
    </div>
  );
}
