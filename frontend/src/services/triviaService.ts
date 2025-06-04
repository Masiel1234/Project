import axios from "axios";

export interface TriviaResponse {
  pregunta: string;
  opciones: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  respuestaCorrecta: string;
  textoRespuestaCorrecta: string;
}

export const getPreguntaAnime = async (): Promise<TriviaResponse> => {
  const response = await axios.get("http://localhost:3001/api/pregunta");
  return response.data;
};
