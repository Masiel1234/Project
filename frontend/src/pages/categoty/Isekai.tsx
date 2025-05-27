import React, { useEffect, useState } from 'react';
import BackgroundIsekai from '../../components/background/BackgroundIsekai'; // Asegúrate de que esta ruta sea correcta
import Quiz from '../../components/Quiz'; 
import isekaiData from '../../data/question-isekai.json'
import ButtonLeave from '../../components/button/ButtonLeave';
import { useTranslation } from 'react-i18next';
interface Question {
  question: string;
  options: string[];
  correct: number;
}

const Isekai: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { t } = useTranslation ();

  useEffect(() => {
    setQuestions(isekaiData);
  }, []); 

  return (
    <BackgroundIsekai>
     
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
         <h2 className="text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg">{t('isekaiPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('isekaiPage.loadingQuestions')}</p>
        )}
      </div>
      <ButtonLeave/>
    </BackgroundIsekai>
  );
};

export default Isekai;