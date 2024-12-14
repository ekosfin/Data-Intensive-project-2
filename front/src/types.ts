export type ApiResponse = {
  created_at: string;
  updated_at: string;
};

export type UserResponse = ApiResponse & {
  userid: number;
  name: string;
  phone: string;
};

export type PermissionResponse = ApiResponse & {
  permissionid: number;
  userid: number;
  officeid: number;
  roleid: number;
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
  roleid: string;
  rolename: string;
};

export type User = UserResponse & {
  permission?: PermissionResponse,
  admin?: AdminResponse,
}