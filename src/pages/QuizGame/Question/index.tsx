import React, { useState, useEffect, useRef } from "react";
import Level1 from "../Questions/Level1";
import Geography from "../Questions/Geography";
import History from "../Questions/History";
import Cinematography from "../Questions/Cinematography";
import Music from "../Questions/Music";
import $ from "./index.module.css";

interface QuestionProps {
  cat: string;
  diff: number;
  currentQuestion: number;
  onMenu: () => void;
  onEnd: (status: boolean | string) => void;
}
const Question: React.FC<QuestionProps> = ({
  cat,
  diff,
  currentQuestion,
  onMenu,
  onEnd,
}) => {
  useEffect(() => {
    switch (cat.toLowerCase()) {
      case "geography":
        setQuestionSet(Geography[diff - 1]);
        break;
      case "history":
        setQuestionSet(History[diff - 1]);
        break;
      case "cinematography":
        setQuestionSet(Cinematography[diff - 1]);
        break;
      case "music":
        setQuestionSet(Music[diff - 1]);
        break;
      default:
        setQuestionSet(Level1);
        break;
    }
  }, [cat, diff]);
  useEffect(() => {
    onReset();
  }, [diff]);
  const [currQuestion, setCurrQuestion] = useState<number>(currentQuestion);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [questionSet, setQuestionSet] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [mistakes, setMistakes] = useState<any[]>([
    <span></span>,
    <span></span>,
    <span></span>,
  ]);

  const answersRef = useRef<null>(null);

  const onCheck = (answer: string, e: React.MouseEvent<HTMLSpanElement>) => {
    const currentQuestionSet = questionSet[currQuestion];
    if (!currentQuestionSet) {
      console.error("Error: Current question set is undefined.");
      return;
    }

    if (
      answer === currentQuestionSet.Correct &&
      currQuestion < questionSet.length - 1
    ) {
      const nextQuestion = currQuestion + 1;
      setCurrQuestion(nextQuestion);
      setScore(score + diff * 150);
      onRemoveClass();
    } else if (
      answer === currentQuestionSet.Correct &&
      currQuestion === questionSet.length - 1
    ) {
      onEnd(true);
      setScore(score + diff * 150);
      onRemoveClass();
    } else if (wrongAnswers === 2) {
      setWrongAnswers(wrongAnswers + 1);
      setScore(score - diff * 50);
      onEnd(false);
      mistakes.pop();
    } else {
      setWrongAnswers(wrongAnswers + 1);
      setScore(score - diff * 50);
      mistakes.pop();
      setSelectedOption(answer);
    }
  };
  const onRemoveClass = () => {
    const wrongOptionElements = document.getElementsByClassName($.WrongOption);
    while (wrongOptionElements.length) {
      wrongOptionElements[0].classList.remove($.WrongOption);
    }
  };

  const onReset = () => {
    setCurrQuestion(0);
    setWrongAnswers(0);
    onEnd("waiting");
    setScore(0);
    setMistakes([
      <span key={1}></span>,
      <span key={2}></span>,
      <span key={3}></span>,
    ]);
    setSelectedOption(null);
    onRemoveClass();
  };

  return (
    <div className={$.QuestionWrapper}>
      <div className={$.QuestionHeader}>
        <span className={$.Score}>
          <span></span>
          {score}
        </span>
        <div>
          {cat}({diff})
        </div>
        <span className={$.Hearths}>{mistakes}</span>
      </div>

      <div className={$.QuestionDisplay}>
        {questionSet[currQuestion] ? (
          <>
            <div className={$.Row1}>
              <span>
                {currQuestion + 1} / {questionSet.length}
              </span>
              <h1>{questionSet[currQuestion].Question}</h1>
            </div>
            <div ref={answersRef} className={$.Answers}>
              {["A", "B", "C", "D"].map((answer, index) => (
                <span
                  key={index}
                  onClick={(e) => onCheck(answer, e)}
                  className={
                    selectedOption === answer &&
                    answer !== questionSet[currQuestion].Correct
                      ? $.WrongOption
                      : ""
                  }
                >
                  {answer}. {questionSet[currQuestion].Answers[answer]}
                </span>
              ))}
            </div>
          </>
        ) : null}
      </div>

      <div className={$.Buttons}>
        <button onClick={() => onMenu()}>
          <span></span>
        </button>
        <button onClick={() => onReset()}>
          <span></span>
        </button>
      </div>
    </div>
  );
};
export default Question;
