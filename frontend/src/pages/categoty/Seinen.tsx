import React, { useEffect, useState } from 'react';
import Quiz from '../../components/Quiz'; 
import SeinenData from '../../data/question-seinen.json'; 
import BackgroundSeinen from '../../components/background/BackgroundSeinen';
import { useTranslation } from 'react-i18next';
import ButtonLeave from '../../components/button/ButtonLeave';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const Seinen: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { t } = useTranslation ();

   useEffect(() => {
    const withKeys = SeinenData.map((q, index) => ({
      ...q,
      key: String(index),
    }));
    setQuestions(withKeys);
  }, []);; 

  return (
    <BackgroundSeinen>
      <ButtonLeave/>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('isekaiPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('isekaiPage.loadingQuestions')}</p>
        )}
      </div>
    </BackgroundSeinen>
  );
};

export default Seinen;