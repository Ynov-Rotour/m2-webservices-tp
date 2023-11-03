import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendResponse } from './response.utils';

interface TokenPayload {
	id: string;
	email: string;
}

interface AuthRequest extends Request {
	userId: string;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers.authorization;

	if (!authHeader) return sendResponse(res, 401, { error: 'No token provided' });

	const parts = authHeader.split(' ');

	if (parts.length !== 2) return sendResponse(res, 401, { error: 'Token error' });

	const [prefix, token] = parts;
	if (!/^Bearer$/i.test(prefix)) return res.status(401).json({ error: 'Token malformatted' });

	jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
		if (err) return sendResponse(res, 401, { error: 'Token invalid' });

		const { id } = decoded as TokenPayload;
		const authReq = req as AuthRequest;
		authReq.userId = id;

		return next();
	});
}
