import { Request, Response } from 'express';
import { PersonService } from './person.service';
import { sendResponse } from '../common/response.utils';

const getPersonById = async (req: Request, res: Response) => {
	const id = +req.params.id;
	const person = await PersonService.getById(id);
	sendResponse(res, 200, person);
}

const createPerson = async (req: Request, res: Response) => {
	const person = await PersonService.create(req.body);
	sendResponse(res, 201, person);
}

const updatePerson = async (req: Request, res: Response) => {
	const id = +req.params.id;
	const person = await PersonService.update(id, req.body);
	sendResponse(res, 200, person);
}

const deletePerson = async (req: Request, res: Response) => {
	const id = +req.params.id;
	await PersonService.deleteById(id);
	sendResponse(res, 204);
}

const deleteAllPersons = async (req: Request, res: Response) => {
	await PersonService.deleteAll();
	sendResponse(res, 204);
}

export const PersonController = {
	getPersonById,
	createPerson,
	updatePerson,
	deletePerson,
	deleteAllPersons,
}