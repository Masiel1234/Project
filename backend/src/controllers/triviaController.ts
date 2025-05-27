import { Request, Response } from "express";
import axios from "axios";
import he from "he";

const traducciones: Record<string, (text: string) => string> = {
  es: (text) => `ES: ${text}`,
  fr: (text) => `FR: ${text}`,
  jp: (text) => `JP: ${text}`,
  zh: (text) => `ZH: ${text}`,
  en: (text) => text,
};

export const obtenerPreguntaTrivia = async (req: Request, res: Response) => {
  try {
    const lang = req.query.lang?.toString() || "en";
     const traducir = traducciones[lang] || ((text) => text);
    const url = "https://opentdb.com/api.php?amount=1&category=31&type=multiple";
    const response = await axios.get(url);

    const trivia = response.data.results[0];

    const opcionesRaw = [...trivia.incorrect_answers, trivia.correct_answer];
    const opcionesDecodificadas = opcionesRaw.map(op => he.decode(op));
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
      textoRespuestaCorrecta: traducir(he.decode(trivia.correct_answer)),
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener pregunta" });
  }
};
