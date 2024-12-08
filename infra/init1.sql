CREATE TABLE Admins (
    AdminID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    Permissions TEXT
);

CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Phone VARCHAR(15)
);

CREATE TABLE Offices (
    OfficeID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    ConnectionString TEXT,
    Address TEXT
);

CREATE TABLE Roles (
    RoleID SERIAL PRIMARY KEY,
    RoleName VARCHAR(100)
);

CREATE TABLE Permissions (
    PermissionID SERIAL PRIMARY KEY,
    UserID INT NOT NULL REFERENCES Users(UserID),
    OfficeID INT REFERENCES Offices(OfficeID),
    RoleID INT REFERENCES Roles(RoleID)
);

CREATE TABLE Fob (
    FobID SERIAL PRIMARY KEY,
    UserID INT NOT NULL REFERENCES Users(UserID),
);


INSERT INTO Users (Name, Phone) VALUES
('Alice Johnson', '123-456-7890'),
('Bob Smith', '987-654-3210');

INSERT INTO Offices (Name, ConnectionString, Address) VALUES
('Office A', 'connection_string_a', '123 Main St'),
('Office B', 'connection_string_b', '456 Elm St');

INSERT INTO Roles (RoleName) VALUES
('Admin'),
('Employee'),
('Guest');

INSERT INTO Permissions (UserID, OfficeID, RoleID) VALUES
(1, 1, 1),
(2, 2, 2);

INSERT INTO Admins (UserID, Permissions) VALUES
(1, 'All');