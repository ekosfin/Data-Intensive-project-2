import { FC } from "react";
import { UserResponse } from "../types";

type Props = UserResponse & {
  fobid?: number;
};

export const User: FC<Props> = (props) => {
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
