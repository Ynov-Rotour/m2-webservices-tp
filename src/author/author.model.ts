// CREATE TABLE author
// (
// 	id        integer     NOT NULL AUTO_INCREMENT,
// 	lastname  VARCHAR(20) NOT NULL,
// 	firstname VARCHAR(20),
// 	phone     VARCHAR(10) NOT NULL,
// 	email     VARCHAR(60),
// 	PRIMARY KEY (id)
// );

export type Author = {
	id: number;
	lastname: string;
	firstname: string;
	phone: string;
	email: string;
};