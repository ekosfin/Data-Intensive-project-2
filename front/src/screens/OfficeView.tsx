import { FC, useMemo } from "react";
import { useOfficeApi } from "../hooks/useOfficeApi";
import { OfficeResponse, UserResponse } from "../types";
import { Room, RoomProps } from "../components";

type Props = {
  office: OfficeResponse | null;
  users: Map<number, UserResponse> | null;
};

export const OfficeView: FC<Props> = ({ office, users }) => {
  const { fobs, rooms, roomPermissions, permissions, roles } = useOfficeApi(
    office?.officeid
  );

  const data: Map<number, RoomProps> = useMemo(() => {
    const temp = new Map<number, RoomProps>(rooms.map(x => ([x.roomid, {...x, permissions: []}])));
    roomPermissions.forEach(x => {
        const room = x.roomid !== undefined ? temp.get(x.roomid) : undefined;
        if (!room) return;
        const permission = permissions.find(y => y.permissionid === x.permissionid);
        if (!permission) return;
        const role = roles.find(y => y.roleid === permission.roleid);
        const user = users?.get(permission.userid) as UserResponse;
        const fob = fobs.filter(y => y.userid === user?.userid);
        room.permissions.push({
            role,
            user: {
                ...user,
                fobs: fob,
            },
        });
        temp.set(room.roomid, room)
    });
    return temp;
  }, [fobs, permissions, roles, roomPermissions, rooms, users]);

  if (office == null) return null;
  return (
    <div className="content-container">
      <span className="title">Rooms</span>
      <div className="container">
        {Array.from(data).map(([key, value]) => (
          <Room key={key} {...value} />
        ))}
      </div>
    </div>
  );
};
