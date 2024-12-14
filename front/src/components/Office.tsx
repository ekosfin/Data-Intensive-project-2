import { FC } from "react";
import { OfficeResponse } from "../types";

export const Office: FC<OfficeResponse> = (props) => {
  return (
    <div className="item tag">
      <span className="joke-name">{props.name}</span>
      <span className="detail">{props.address}</span>
      <div className="joke-info">
        <div className="detail">
          <span className="info-title">ID:</span>
          <span>{props.officeid}</span>
        </div>
      </div>
      <div className="joke-info">
        <div className="detail">
          <span className="info-title">Connection string:</span>
          <span>{props.connectionstring}</span>
        </div>
      </div>
    </div>
  );
};
