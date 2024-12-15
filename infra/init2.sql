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
('Admin'),
('Employee'),
('Guest'),
('Manager'),
('Supervisor'),
('Technician'),
('Developer'),
('Designer'),
('Analyst'),
('Consultant'),
('Intern'),
('HR'),
('Support'),
('Trainer'),
('Coordinator'),
('Specialist'),
('Operator'),
('Director'),
('Lead'),
('Executive');

INSERT INTO Rooms (RoomName) VALUES
('Meeting Room A'),
('Conference Hall'),
('Break Room'),
('Training Room'),
('Server Room'),
('Executive Office'),
('Reception'),
('Library'),
('Cafeteria'),
('Board Room'),
('Main Hall'),
('Small Office 1'),
('Small Office 2'),
('Medium Office'),
('Large Office'),
('Storage Room 1'),
('Storage Room 2'),
('Workshop'),
('Auditorium'),
('Lounge');

INSERT INTO Permissions (UserID, RoleID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20);

INSERT INTO RoomPermissions (PermissionID, RoomID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20);

INSERT INTO Fob (UserID, RoleID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20);