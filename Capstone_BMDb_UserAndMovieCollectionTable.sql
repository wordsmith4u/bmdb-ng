-- add tables to bmdb:  user, movie_collection
Create table User (
ID 					integer 			primary key auto_increment,
Username			varchar(20) 		not null unique,
Password 			varchar(10) 	not null,
FirstName 			varchar(20) 	not null,
LastName 			varchar(20) 	not null,
PhoneNumber 		varchar(12) 	not null,
Email 				varchar(75) 	not null,
CollectionValue		decimal(10,2)	not null default 0
);

insert into user (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email) VALUES
	(1, 'SYSTEM', 'xxxxx', 'System', 'System', 'XXX-XXX-XXXX', 'system@test.com'),
	(2, 'sblessing', 'login', 'Sean', 'Blessing', 'XXX-XXX-XXXX', 'system@test.com');
    
Create table MovieCollection (
ID 					integer			primary key auto_increment,
UserID				integer			not null,
MovieID				integer			not null,
PurchasePrice 		decimal(4,2) 	not null,
Foreign Key (UserID) references User(ID),
Foreign Key (MovieID) references Movie(ID)
);

insert into MovieCollection (UserID, MovieID, PurchasePrice) VALUES
	(2, 1, 19.99),
	(2, 2, 32.99),
	(2, 8, 12.99);
