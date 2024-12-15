import { FC } from "react";
import { OfficeResponse, RoleResponse, User as UserType } from "../types";
import { Office, Role, User } from "../components";

type Props = {
    users: [number, UserType][];
    roles: RoleResponse[];
    offices: OfficeResponse[];
};

export const CloudView: FC<Props> = ({ users, roles, offices }) => 
    <div className="content-container">
      <span className="title">Offices</span>
        <div className="container">
          {offices.map((entry) => (
            <Office key={entry.officeid} {...entry} />
          ))}
        </div>
        <span className="title">Roles</span>
        <div className="container wrap">
          {roles.map((entry) => (
            <Role key={entry.roleid} {...entry} />
          ))}
        </div>
        <span className="title">Users</span>
        <div className="container wrap">
          {(users).map(([key, value]) => (
            <User key={key} {...value} />
          ))}
        </div>
      </div>