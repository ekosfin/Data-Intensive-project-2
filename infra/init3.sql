CREATE TABLE Roles (
    RoleID SERIAL PRIMARY KEY,
    RoleName VARCHAR(100)
);

CREATE TABLE Permissions (
    PermissionID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    RoleID INT NOT NULL REFERENCES Roles(RoleID)
);

CREATE TABLE Rooms (
    RoomID SERIAL PRIMARY KEY,
    RoomName VARCHAR(100)
);

CREATE TABLE RoomPermissions (
    RoomPermissionID SERIAL PRIMARY KEY,
    PermissionID INT NOT NULL REFERENCES Permissions(PermissionID),
    RoomID INT NOT NULL REFERENCES Rooms(RoomID)
);

CREATE TABLE Fob (
    FobID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    RoleID INT REFERENCES Roles(RoleID)
);

INSERT INTO Roles (RoleName) VALUES
('Supervisor'),
('Technician'),
('Intern');

INSERT INTO Rooms (RoomName) VALUES
('Workshop'),
('Server Room'),
('Training Room');

INSERT INTO Permissions (UserID, RoleID) VALUES
(3, 1),
(4, 3);

INSERT INTO RoomPermissions (PermissionID, RoomID) VALUES
(1, 1),
(2, 2);

INSERT INTO Fob (UserID, RoleID) VALUES
(3, 1),
(4, 3);