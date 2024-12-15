export type ApiResponse = {
  created_at: string;
  updated_at: string;
};

export type UserResponse = ApiResponse & {
  userid: number;
  name: string;
  phone: string;
};

export type FobResponse = ApiResponse & {
  fobid: number;
  userid?: number;
};

export type PermissionResponse = ApiResponse & {
  permissionid: number;
  userid: number;
  officeid?: number;
  roleid: number;
};

export type OfficePermissionResponse = ApiResponse & {
  permissionid: number;
  userid: number;
  roleid: number;
}

export type RoomPermissionResponse = ApiResponse & {
  roompermissionid: number;
  permissionid?: number;
  roomid?: number;
};

export type OfficeResponse = ApiResponse & {
  officeid: number;
  name: string;
  connectionstring: string;
  address: string;
};

export type AdminResponse = ApiResponse & {
  adminid: number;
  userid: number;
  permissions: string;
};

export type RoleResponse = ApiResponse & {
  roleid: number;
  rolename: string;
};

export type RoomResponse = ApiResponse & {
  roomid: number;
  roomname: string;
};

export type User = UserResponse & {
  permission?: PermissionResponse,
  admin?: AdminResponse,
}