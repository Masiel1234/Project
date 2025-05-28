import React, { useEffect, useState } from 'react';
import Quiz from '../../components/Quiz'; 
import ShojoData from '../../data/question-shojo.json'; 
import BackgroundShojo from '../../components/background/BackgroundShojo';
import { useTranslation } from 'react-i18next';
import ButtonLeave from '../../components/button/ButtonLeave';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const Shojo: React.FC = () => {
  const { t } = useTranslation ();  
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const withKeys = ShojoData.map((q, index) => ({
      ...q,
      key: String(index),
    }));
    setQuestions(withKeys);
  }, []);

  return (
    <BackgroundShojo>
     <ButtonLeave/>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4"> 
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('shojoPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('shojoPage.loadingQuestions')}</p>
        )}
      </div>
    </BackgroundShojo>
  );
};

export default Shojo;