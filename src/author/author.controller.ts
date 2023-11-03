import { Response, Request } from 'express';
import { sendResponse } from '../common/response.utils';
import { Author } from './author.model';
import { AuthorService } from './author.service';

const create = async (req: Request, res: Response) => {
	try {
		const author = req.body as Author;
		const newAuthor = await AuthorService.create(author);
		sendResponse(res, 201, newAuthor);
	} catch (err: any) {
		sendResponse(res, 500, err.message);
	}
}

export const AuthorController = {
	create
}