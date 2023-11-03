import DB from '../common/db.singleton'

const getById = async (id: number) => {
	const query = `SELECT * FROM person WHERE id = ${id}`
	const [rows] = await DB.query(query);
	return rows[0];
}

const create = async (person: any) => {
	const query = `INSERT INTO person (firstname, lastname) VALUES (?, ?)`
	const values = [person.firstname, person.lastname]
	const [result] = await DB.query(query, values);
	const newId = result.insertId;
	return getById(newId);
}

const update = async (id: number, person: any) => {
	const query = `UPDATE person SET firstname = ?, lastname = ? WHERE id = ?`
	const values = [person.firstname, person.lastname, id]
	await DB.query(query, values);
	return getById(id);
}

const deleteById = async (id: number) => {
	const query = `DELETE FROM person WHERE id = ?`
	const values = [id]
	await DB.query(query, values);
}

const deleteAll = async () => {
	const query = `DELETE FROM person`
	await DB.query(query);
}

export const PersonService = {
	getById,
	create,
	update,
	deleteById,
	deleteAll,
}