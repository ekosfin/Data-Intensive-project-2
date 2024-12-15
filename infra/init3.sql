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
('Administrator'),
('Employee'),
('Visitor'),
('Project Manager'),
('Team Lead'),
('Technician'),
('Software Engineer'),
('UI/UX Designer'),
('Data Analyst'),
('Business Consultant'),
('Intern'),
('Human Resources'),
('Customer Support'),
('Corporate Trainer'),
('Project Coordinator'),
('Technical Specialist'),
('Operations'),
('Executive Director'),
('Lead Developer'),
('C-Suite Executive');

INSERT INTO Rooms (RoomName) VALUES
('Strategy Room'),
('VIP Conference Room'),
('Relaxation Room'),
('Training Center'),
('Data Center'),
('Executive Suite'),
('Welcome Area'),
('Study Room'),
('Dining Area'),
('Leadership Room'),
('Grand Hall'),
('Private Office 1'),
('Private Office 2'),
('Collaborative Space'),
('Senior Executive Office'),
('Storage Unit 1'),
('Storage Unit 2'),
('Innovation Lab'),
('Event Hall'),
('Recreation Lounge');

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