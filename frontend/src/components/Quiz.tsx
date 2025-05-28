import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showCongrats, setShowCongrats] = useState<boolean>(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setShuffledQuestions(shuffled);
      setCurrentIndex(0);
      setSelectedOptionIndex(null);
      setShowAnswer(false);
      setShowCongrats(false);
    }
  }, [questions]); 

  const handleOptionClick = (index: number) => {
    
    if (!showAnswer) {
      setSelectedOptionIndex(index);
      setShowAnswer(true); 
    }
  };

  const handleNext = () => {
   
    if (currentIndex + 1 < shuffledQuestions.length) {
      setCurrentIndex(prevIndex => prevIndex + 1); 
      setSelectedOptionIndex(null);
      setShowAnswer(false);
    } else {
      setShowCongrats(true);
    }
  };

  
  if (shuffledQuestions.length === 0) {
    return <p className="text-white text-lg">{t('quiz.noQuestionsAvailable')}</p>;
  }

  if (showCongrats) {
    return (
      <div className="quiz-congrats text-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-black-700 mb-4">{t('quiz.congratulationsTitle')}</h2>
        <p className="text-xl text-gray-800 mb-6">{t('quiz.congratulationsMessage')}</p>
        <button
          onClick={() => navigate('/index')}
          className="w-full px-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
        >
        {t('quiz.backToHome')}
        </button>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className="quiz-container p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{t(currentQuestion.question)}</h2>
      <ul className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`
              p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out
              ${showAnswer
                ? index === currentQuestion.correct
                  ? 'bg-green-200 text-green-800 border border-green-400' 
                  : index === selectedOptionIndex
                    ? 'bg-red-200 text-red-800 border border-red-400' 
                    : 'bg-gray-100 text-gray-700 border border-gray-200' 
                : selectedOptionIndex === index
                  ? 'bg-blue-100 text-pink-800 border border-blue-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200' 
              }
            `}
            style={{
              pointerEvents: showAnswer ? 'none' : 'auto', 
            }}
          >
            {t(option)}
          </li>
        ))}
      </ul>

      {showAnswer && (
        <div className="feedback-section mt-6 p-4 border-t border-gray-200">
          <p className={`text-lg font-medium mb-4 ${selectedOptionIndex === currentQuestion.correct ? 'text-green-600' : 'text-red-600'}`}>
            {selectedOptionIndex === currentQuestion.correct
              ? t('quiz.correctFeedback')
              : `${t('quiz.incorrectFeedback')} ${t(currentQuestion.options[currentQuestion.correct])}`}
          </p>
          <button
            onClick={handleNext}
            className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300"
          >
            {t('quiz.nextQuestion')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;