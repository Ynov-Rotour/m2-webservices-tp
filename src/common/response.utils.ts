import { Response } from 'express';
import { HTTP_STATUS } from './http-status';

export const sendResponse = (res: Response, statusCode: keyof typeof HTTP_STATUS, data?: unknown) => {
	if (statusCode > 399) {
		console.error(res.req.url, data);
	}
	if (!data) {
		data = HTTP_STATUS[statusCode] ?? HTTP_STATUS[500];
	}
	res.status(statusCode).json({
		success: statusCode < 400,
		data
	});
}