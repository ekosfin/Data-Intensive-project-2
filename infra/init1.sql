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
    UserID INT NOT NULL REFERENCES Users(UserID)
);

INSERT INTO Users (Name, Phone) VALUES
('Alice Johnson', '123-456-7890'),
('Bob Smith', '987-654-3210'),
('Charlie Brown', '555-123-4567'),
('Diana Prince', '222-333-4444'),
('Eve Adams', '333-444-5555'),
('Frank Castle', '444-555-6666'),
('Grace Hopper', '555-666-7777'),
('Hank Pym', '666-777-8888'),
('Ivy Green', '777-888-9999'),
('Jack Ryan', '888-999-0000'),
('Karen Page', '999-000-1111'),
('Leo Fitz', '000-111-2222'),
('Maya Lopez', '111-222-3333'),
('Nina Sharp', '222-333-4445'),
('Oscar Wilde', '333-444-5556'),
('Paul Atreides', '444-555-6667'),
('Quinn Mallory', '555-666-7778'),
('Rita Hayworth', '666-777-8889'),
('Steve Rogers', '777-888-9990'),
('Tony Stark', '888-999-0001');

INSERT INTO Offices (Name, ConnectionString, Address) VALUES
('Office A', 'connection_string_a', '123 Main St'),
('Office B', 'connection_string_b', '456 Elm St'),
('Office C', 'connection_string_c', '789 Oak Ave'),
('Office D', 'connection_string_d', '101 Pine Blvd'),
('Office E', 'connection_string_e', '202 Maple St'),
('Office F', 'connection_string_f', '303 Cedar Rd'),
('Office G', 'connection_string_g', '404 Birch Ln'),
('Office H', 'connection_string_h', '505 Spruce Ct'),
('Office I', 'connection_string_i', '606 Redwood Dr'),
('Office J', 'connection_string_j', '707 Cypress Way'),
('Office K', 'connection_string_k', '808 Walnut St'),
('Office L', 'connection_string_l', '909 Chestnut Blvd'),
('Office M', 'connection_string_m', '1001 Ash Rd'),
('Office N', 'connection_string_n', '1102 Beech Ln'),
('Office O', 'connection_string_o', '1203 Hickory Dr'),
('Office P', 'connection_string_p', '1304 Alder Way'),
('Office Q', 'connection_string_q', '1405 Elm St'),
('Office R', 'connection_string_r', '1506 Maple Ave'),
('Office S', 'connection_string_s', '1607 Pine St'),
('Office T', 'connection_string_t', '1708 Cedar Blvd');

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

INSERT INTO Permissions (UserID, OfficeID, RoleID) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(11, 11, 11),
(12, 12, 12),
(13, 13, 13),
(14, 14, 14),
(15, 15, 15),
(16, 16, 16),
(17, 17, 17),
(18, 18, 18),
(19, 19, 19),
(20, 20, 20);

INSERT INTO Admins (UserID, Permissions) VALUES
(1, 'Read, Write'),
(2, 'Read, Write'),
(3, 'Write'),
(4, 'Read'),
(5, 'Read, Write'),
(6, 'Read, Write'),
(7, 'Read, Write'),
(8, 'Read, Write'),
(9, 'Read, Write'),
(10, 'Read, Write'),
(11, 'Read, Write'),
(12, 'Read, Write'),
(13, 'Read, Write'),
(14, 'Read, Write'),
(15, 'Read, Write'),
(16, 'Read, Write'),
(17, 'Read, Write'),
(18, 'Read, Write'),
(19, 'Read, Write'),
(20, 'Read, Write');

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