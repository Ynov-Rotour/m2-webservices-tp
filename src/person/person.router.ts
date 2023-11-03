import { Router } from "express";
import { PersonController } from "./person.controller";
const router = Router();

router.get("/:id", PersonController.getPersonById);
router.post("/", PersonController.createPerson);
router.put("/:id", PersonController.updatePerson);
router.delete("/:id", PersonController.deletePerson);
router.delete("/", PersonController.deleteAllPersons);

export const PersonRouter = router;