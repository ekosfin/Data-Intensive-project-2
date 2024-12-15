import { useEffect, useState } from "react";
import { FobResponse, PermissionResponse, RoleResponse, RoomPermissionResponse, RoomResponse } from "../types";
import { fetchOfficeFobs, fetchOfficePermissions, fetchOfficeRoles, fetchOfficeRoomPermissions, fetchOfficeRooms } from "../util";

export const useOfficeApi = (officeid?: number) => {
  const [fobs, setFobs] = useState<FobResponse[]>([]);
  const [rooms, setRooms] = useState<RoomResponse[]>([]);
  const [roomPermissions, setRoomPermissions] = useState<RoomPermissionResponse[]>([]);
  const [permissions, setPermissions] = useState<PermissionResponse[]>([]);
  const [roles, setRoles] = useState<RoleResponse[]>([]);

  useEffect(() => {
    if (officeid === undefined) return;
    let active = true;
    const stuff = async () => {
      const tempFobs = fetchOfficeFobs(officeid);
      const tempRooms = fetchOfficeRooms(officeid);
      const tempRoomPermissions = fetchOfficeRoomPermissions(officeid);
      const tempPermissions = fetchOfficePermissions(officeid);
      const tempRoles = fetchOfficeRoles(officeid);
      if (active) setFobs(await tempFobs ?? []);
      if (active) setRooms(await tempRooms ?? []);
      if (active) setRoomPermissions(await tempRoomPermissions ?? []);
      if (active) setPermissions(await tempPermissions ?? []);
      if (active) setRoles(await tempRoles ?? []);
    };
    stuff();
    return () => {
      active = false;
    };
  }, [officeid]);
  return { fobs, rooms, permissions, roomPermissions, roles };
};
