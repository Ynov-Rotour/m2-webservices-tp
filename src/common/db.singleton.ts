import mysql, { Connection } from 'mysql2/promise';

const creds = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'db'
}

class Database {
	private static instance: Database;
	private connection: Connection;

	private constructor() {
		this.connection = mysql.createPool(creds);
	}

	public static getInstance(): Database {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}

	public async query(sql: string, values?: any): Promise<any> {
		return this.connection.query(sql, values);
	}
}

export default Database.getInstance();

