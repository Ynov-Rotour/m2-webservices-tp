// CREATE TABLE person (
// 	id    	integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
// 	lastname   	VARCHAR( 20 ) NOT NULL ,
// 	firstname	VARCHAR( 40 )
//  );

export type Person = {
	id: number;
	lastname: string;
	firstname: string;
};