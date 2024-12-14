import { useEffect, useState } from "react";
import { fetchAdmins, fetchOffices, fetchPermissions, fetchRoles, fetchUsers } from "../util";
import { AdminResponse, OfficeResponse, PermissionResponse, RoleResponse, UserResponse } from "../types";

export const useOfficeApi = (office: string) => {
  const [offices, setOffices] = useState<OfficeResponse[]>([]);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [permissions, setPermissions] = useState<PermissionResponse[]>([]);
  const [admins, setAdmins] = useState<AdminResponse[]>([]);
  const [roles, setRoles] = useState<RoleResponse[]>([]);

  useEffect(() => {
    let active = true;
    const stuff = async () => {
      const tempUsers = fetchUsers();
      const tempOffices = fetchOffices();
      const tempPermissions = fetchPermissions();
      const tempAdmins = fetchAdmins();
      const tempRoles = fetchRoles();
      if (active) setUsers(await tempUsers ?? []);
      if (active) setOffices(await tempOffices ?? []);
      if (active) setPermissions(await tempPermissions ?? []);
      if (active) setAdmins(await tempAdmins ?? []);
      if (active) setRoles(await tempRoles ?? []);
    };
    stuff();
    return () => {
      active = false;
    };
  }, []);
  return { users, offices, permissions, admins, roles };
};
