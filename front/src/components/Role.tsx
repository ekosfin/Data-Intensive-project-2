import { FC } from "react";
import { RoleResponse } from "../types";

export const Role: FC<RoleResponse> = (props) => {
  return (
    <div className="item category">
      <span className="info-title">{props.rolename}</span>
      <div className="joke-info">
        <div className="detail">
          <span className="info-title">ID:</span>
          <span>{props.roleid}</span>
        </div>
      </div>
    </div>
  );
};
