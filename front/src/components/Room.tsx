import { FC } from "react";
import {
  FobResponse,
  RoleResponse,
  UserResponse,
} from "../types";
import { User } from "./User";
import { Role } from "./Role";

export type RoomProps = {
  roomname: string,
  roomid: number,
  permissions: {
    role?: RoleResponse;
    user?: UserResponse &{
      fobs?: FobResponse[];
    };
  }[];
};

export const Room: FC<RoomProps> = ({ roomid, roomname, permissions }) => {
  return (
    <div className="item tag">
      <span className="joke-name">{roomname}</span>
      <span className="joke-name">Permissions</span>
      {permissions.map((x) => (
        <>
          {x.user && <User {...x.user} />}
          {x.role && <Role {...x.role} />}
        </>
      ))}
      <div className="joke-info">
        <div className="detail">
          <span className="info-title">ID:</span>
          <span>{roomid}</span>
        </div>
      </div>
    </div>
  );
};
