export const backendUrl = "http://localhost:8000/";
export enum Route {
  Users = "users",
  Permissions = "permissions",
  Roles = "roles",
  Offices = "offices",
  Admins = "admins"
}
export enum FormType {
  Name = "joke-name",
  Text = "joke-text",
  Category = "joke-category",
  Tags = "joke-tags",
}

export enum Submitter {
    Postgre = "postgre",
    Mongo = "mongo"
}