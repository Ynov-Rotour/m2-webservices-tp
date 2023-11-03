import mysql from "mysql"
import { Author } from './author.model'
import Connection from "../common/db.singleton";



const create = (data: Author) => {
	const { firstname, lastname, phone, email } = data
	const query = `INSERT INTO author (firstname, lastname, phone, email) VALUES ('${firstname}', '${lastname}', '${phone}', '${email}')`
	const connection = Connection.getConnection();
	connection.query(query, (error, results) => {
		if (error) {
			console.error(error)
			return
		}

		console.log(results)
	})
}

export const AuthorService = {
	create
}