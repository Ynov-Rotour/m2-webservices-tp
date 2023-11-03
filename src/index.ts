import cors from "cors";
import express from "express";
import { PersonRouter } from './person/person.router';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/person', PersonRouter);

app.listen(3000, () => {
	console.log("🚀⚡️ Server running on http://localhost:3000");
});