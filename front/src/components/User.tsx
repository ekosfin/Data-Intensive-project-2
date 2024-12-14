import { FC } from "react";
import { UserResponse } from "../types";

export const User: FC<
  UserResponse
> = (props) => {
  return (
    <div className="item joke">
      <div className="joke-attributes">
        <span className="info-title">{props.name}</span>
      </div>
      <span className="joke-text">Phone: {props.phone}</span>
      <div className="joke-info">
        <div className="detail">
          <span className="info-title">ID:</span>
          <span>{props.userid}</span>
        </div>
      </div>
    </div>
  );
};
