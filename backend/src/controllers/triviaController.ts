import { Request, Response } from "express";
import axios from "axios";
import he from "he";

export const obtenerPreguntaTrivia = async (req: Request, res: Response) => {
  try {
    const url = "https://opentdb.com/api.php?amount=50&category=31&difficulty=medium&type=multiple";
    const response = await axios.get(url);
    const trivia = response.data.results?.[0];

    if (!trivia || !trivia.question || !trivia.correct_answer) {
      return res.status(502).json({ error: "La API externa no devolvió una pregunta válida." });
    }

    const opciones = [...trivia.incorrect_answers, trivia.correct_answer];
    const opcionesDecodificadas = opciones.map(op => he.decode(op));
    const opcionesAleatorias = opcionesDecodificadas.sort(() => Math.random() - 0.5);

    const letraCorrecta = ["A", "B", "C", "D"][opcionesAleatorias.indexOf(he.decode(trivia.correct_answer))];

    res.json({
      pregunta: he.decode(trivia.question),
      opciones: {
        A: opcionesAleatorias[0],
        B: opcionesAleatorias[1],
        C: opcionesAleatorias[2],
        D: opcionesAleatorias[3],
      },
      respuestaCorrecta: letraCorrecta,
      textoRespuestaCorrecta: he.decode(trivia.correct_answer),
    });
  } catch (error) {
    console.error("❌ Error al obtener pregunta:", error);
    res.status(500).json({ error: "Error al obtener pregunta" });
  }
};
