import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

import "../App.css";

// الأسئلة والإجابات الصحيحة مع مثال عملي
const questions = [
  {
    question: "ما هي البرولوغ؟",
    options: ["لغة برمجة منطقية", "لغة برمجة كائنية", "لغة برمجة ديناميكية"],
    correctAnswer: "لغة برمجة منطقية",
    type: "multiple",
  },
  {
    question: "البرولوغ هي لغة برمجة منطقية تعتمد على القواعد والاستنتاج.",
    options: ["صح", "خطأ"],
    correctAnswer: "صح",
    type: "trueFalse",
  },
  {
    question: "ماذا يحدث في البرولوغ عند كتابة: `father(john, mary).` ؟",
    options: ["تعريف أن جون هو والد ماري", "تعريف أن ماري هي والد جون", "لا شيء"],
    correctAnswer: "تعريف أن جون هو والد ماري",
    type: "multiple",
    example: "`father(john, mary).` هي قاعدة تربط بين 'جون' و 'ماري' في علاقة الأبوة."
  },
  {
    question: "ما هي القاعدة في البرولوغ؟",
    options: ["جملة منطقية تحتوي على حقيقة", "دالة رياضية", "طريقة لتنظيم البيانات"],
    correctAnswer: "جملة منطقية تحتوي على حقيقة",
    type: "multiple",
    example: "مثال على قاعدة: `likes(john, pizza).` تعني أن 'جون' يحب 'البيتزا'."
  },
  {
    question: "في البرولوغ، يمكن أن يحتوي النظام على قواعد منطقية تربط بين العوامل.",
    options: ["صح", "خطأ"],
    correctAnswer: "صح",
    type: "trueFalse",
    example: "مثال على القاعدة: `father(john, mary).` و `father(john, alex).`"
  },
  {
    question: "ماذا يعني الاستعلام في البرولوغ؟",
    options: ["البحث عن حقائق داخل النظام", "كتابة قواعد جديدة", "تحويل القيم إلى بيانات"],
    correctAnswer: "البحث عن حقائق داخل النظام",
    type: "multiple",
    example: "مثال للاستعلام: `father(john, X).` يعني استعلام لمعرفة من هم أولاد جون."
  },
  {
    question: "البرولوغ تعتمد على أسلوب البرمجة الهيكلية.",
    options: ["صح", "خطأ"],
    correctAnswer: "خطأ",
    type: "trueFalse",
    example: "البرولوغ تعتمد على البرمجة المنطقية، حيث تقوم على القواعد والحقائق."
  },
  {
    question: "في البرولوغ، `:-` يتم استخدامها لتمثيل العلاقة بين القاعدة والشرط.",
    options: ["صح", "خطأ"],
    correctAnswer: "صح",
    type: "trueFalse",
    example: "مثال: `human(X) :- man(X).` تعني أن 'X' هو إنسان إذا كان 'X' رجل."
  },
  {
    question: "هل يمكن للبرولوغ التعامل مع قواعد مفقودة؟",
    options: ["نعم", "لا"],
    correctAnswer: "نعم",
    type: "multiple",
    example: "في حالة وجود قاعدة مفقودة، يمكن للبرولوغ أن يظل يبحث عن حلول بديلة."
  },
  {
    question: "ماذا يفعل مفسر البرولوغ؟",
    options: ["يبحث عن حلول منطقية", "يعرض النصوص فقط", "يقوم بتخزين البيانات"],
    correctAnswer: "يبحث عن حلول منطقية",
    type: "multiple",
    example: "المفسر يبحث في القواعد والحقائق لإيجاد إجابة للاستعلامات."
  },
  {
    question: "ما هو مبدأ الاستنتاج في البرولوغ؟",
    options: ["الاستنتاج بالقواعد", "الاستنتاج بالحسابات الرياضية", "الاستنتاج باستخدام الخوارزميات"],
    correctAnswer: "الاستنتاج بالقواعد",
    type: "multiple",
    example: "المفسر يستخدم القواعد مثل `parent(X, Y) :- father(X, Y).` لاستنتاج من هو الأب."
  },
  {
    question: "ما هي العلاقة بين 'fact' و 'rule' في البرولوغ؟",
    options: ["الحقائق هي قواعد ثابتة، والقواعد هي جمل منطقية للاستنتاج", "الحقائق هي استعلامات، والقواعد هي إجابات", "الحقائق والقواعد هما نفس الشيء"],
    correctAnswer: "الحقائق هي قواعد ثابتة، والقواعد هي جمل منطقية للاستنتاج",
    type: "multiple",
    example: "مثال على حقيقة: `father(john, mary).`، ومثال على قاعدة: `child(X, Y) :- father(Y, X).`"
  },
  {
    question: "ما الذي يعنيه وجود متغير في استعلام البرولوغ؟",
    options: ["البحث عن قيمة ثابتة", "البحث عن حل يتوافق مع جميع القيم الممكنة", "البحث عن قيمة واحدة فقط"],
    correctAnswer: "البحث عن حل يتوافق مع جميع القيم الممكنة",
    type: "multiple",
    example: "مثال على استعلام مع متغير: `father(X, mary).` سيبحث عن جميع الآباء الذين لديهم اسم 'ماري'."
  }
];


const Exam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const [showAlert, setShowAlert] = useState(false); 

  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10); 
  };
  

  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleQuestions());

  const handleChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (answers[currentQuestion] === null) {
      setShowAlert(true);
      return; 
    }
    setShowAlert(false); 
    setCurrentQuestion(currentQuestion + 1); 
  };
  

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const totalScore = answers.reduce((score, answer, index) => {
      const question = shuffledQuestions[index];
      if (question && question.correctAnswer === answer) {
        score += 1;
      }
      return score;
    }, 0);
    setScore(totalScore);
    setShowResult(true); 
  };
  

  const restartTest = () => {
    setShuffledQuestions(shuffleQuestions());
    setAnswers(Array(10).fill(null));
    setCurrentQuestion(0);
    setScore(null);
    setShowResult(false);
  };

  return (
    <div className="exam-container">
      <h1>امتحان البرولوغ</h1>
      {showResult ? (
        <div className="result">
          <h3>النتيجة: {score} من {shuffledQuestions.length}</h3>
          <p>{score === shuffledQuestions.length ? "أحسنت!" : "حاول مرة أخرى!"}</p>
          <div className="answers-review">
            {shuffledQuestions.map((question, index) => (
              <div key={index} className="review-question">
                <p>{question.question}</p>
                <p><strong>إجابتك:</strong> {answers[index]}</p>
                <p>
                <p><strong>الإجابة الصحيحة:</strong> {question.correctAnswer}</p>
                </p>
                {answers[index] !== question.correctAnswer && (
                  <p className="incorrect">إجابتك خاطئة</p>
                )}
                {answers[index] === question.correctAnswer && (
                  <p className="correct">إجابتك صحيحة</p>
                )}
              </div>
            ))}
          </div>
          <button onClick={restartTest} className="restart-button">إعادة الاختبار</button>
        </div>
      ) : (
        <div className="question-container">
          <h3>{shuffledQuestions[currentQuestion].question}</h3>
          {shuffledQuestions[currentQuestion].type === "multiple" ? (
            shuffledQuestions[currentQuestion].options.map((option, i) => (
              <div key={i} className="option">
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleChange(currentQuestion, option)}
                />
                <label>{option}</label>
              </div>
            ))
          ) : (
            shuffledQuestions[currentQuestion].options.map((option, i) => (
              <div key={i} className="option">
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleChange(currentQuestion, option)}
                />
                <label>{option}</label>
              </div>
            ))
          )}
           {showAlert && (
        <Alert variant="danger">
          يرجى اختيار إجابة قبل الانتقال للسؤال التالي!
        </Alert>
      )}
          <div className="navigation-buttons">
            {/* <button onClick={prevQuestion} disabled={currentQuestion === 0} className="nav-button">
              السؤال السابق
            </button> */}
            <button onClick={nextQuestion} disabled={currentQuestion === shuffledQuestions.length - 1} className="nav-button">
              السؤال التالي
            </button>
            {currentQuestion === shuffledQuestions.length - 1 && (
              <button onClick={handleSubmit} className="submit-button">تقديم الامتحان</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Exam;
