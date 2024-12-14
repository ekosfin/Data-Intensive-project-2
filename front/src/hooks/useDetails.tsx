import { useMemo } from "react";
import { useCloudApi } from "./useCloudApi";
import { User } from "../types";

export const useDetails = () => {
  const { users: rawUsers, offices, permissions, roles, admins } = useCloudApi();
  //const lol = useOfficeApi();

  const users: Map<number, User> = useMemo(() => {
    const tempUsers: Map<number, User> = new Map(rawUsers.map(x => [x.userid, x]));
    permissions.forEach(x => {
      const user = tempUsers.get(x.userid);
      if (user) {
        user.permission = x;
        tempUsers.set(user.userid, user);
      }
    });
    admins.forEach(x => {
      const user = tempUsers.get(x.userid);
      if (user) {
        user.admin = x;
        tempUsers.set(user.userid, user);
      }
    })
    return tempUsers;
  }, [admins, permissions, rawUsers]);

  return { users, offices, roles };
};
