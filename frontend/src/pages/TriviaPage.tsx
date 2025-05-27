import { useEffect, useState } from "react";
import TriviaCard from "../components/TriviaCard";
import { getPreguntaAnime } from "../services/triviaService"
import type  {TriviaResponse} from "../services/triviaService"
import ButtonLeave from "../components/button/ButtonLeave";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/button/LanguageSelector";

import BackgroundIndex from "../components/background/BackgroundIndex";
const TriviaPage = () => {
     const { t , i18n} = useTranslation()
     const currentLang = i18n.language;
  const [preguntaData, setPreguntaData] = useState<TriviaResponse | null>(null);
  const [respuestaUsuario, setRespuestaUsuario] = useState<string | null>(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<string | null>(null);

  const cargarPregunta = async () => {
    const data = await getPreguntaAnime();
    setPreguntaData(data);
    setRespuestaUsuario(null);
    setRespuestaCorrecta(data.respuestaCorrecta);
  };

  useEffect(() => {
    cargarPregunta();
  }, [currentLang]);

  const handleRespuesta = (opcion: string) => {
    setRespuestaUsuario(opcion);
  };

  return (
    <BackgroundIndex>
      <ButtonLeave title={t("buttonLeave.Leave_Game")}/>
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-black-700">{t("trivia.title")}</h1>

      {preguntaData && (
        <>

          <TriviaCard
            pregunta={preguntaData.pregunta}
            opciones={preguntaData.opciones}
            onRespuesta={handleRespuesta}
          />
          
          {respuestaUsuario && (
            <div className="mt-6 text-center">
              {respuestaUsuario === respuestaCorrecta ? (
                <p className="text-green-600 text-lg font-semibold">✅ {t("trivia.correct")}</p>
              ) : (
                <p className="text-red-600 text-lg font-semibold">
                  ❌ {t("trivia.incorrect")}
                  <br/>  {t("trivia.correct_answer")}:{respuestaCorrecta}.
                </p>
              )}
              <button
                onClick={cargarPregunta}
                className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300"
              >
                {t("trivia.next_question")}
              </button>
            </div>
          )}
        </>
      )}
    </div>
    <LanguageSelector/>
    </BackgroundIndex>
  );
};

export default TriviaPage;
