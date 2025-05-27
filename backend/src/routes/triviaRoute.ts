import { Router } from "express";
import { obtenerPreguntaTrivia } from "../controllers/triviaController";

const router = Router();

router.get("/pregunta", obtenerPreguntaTrivia);

export default router;
