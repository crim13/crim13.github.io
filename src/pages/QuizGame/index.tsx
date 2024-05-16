import React, { useState } from "react";
import { useNavigate } from "react-router";
import Question from "./Question";

import $ from "./index.module.css";

interface Levels {
  category: string;
  level: number;
}

const QuizGame = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(1);
  const [success, setSuccess] = useState<boolean | string>("waiting");
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [levels, setLevels] = useState<Levels[]>([
    { category: "Geography", level: 1 },
    { category: "Music", level: 1 },
    { category: "Cinematography", level: 1 },
    { category: "History", level: 1 },
  ]);
  const navigate = useNavigate();

  const onPlay = (cat: string, diff: number) => {
    console.log(cat);
    console.log(diff);
    setSelectedCategory(cat);
    setSelectedDifficulty(diff);
    setPlay(true);
  };
  const onNextLevel = (category: string, newLevel: number) => {
    if (selectedDifficulty < 3) {
      setLevels((prevLevels) =>
        prevLevels.map((level) =>
          level.category === category ? { ...level, level: newLevel } : level
        )
      );
    }
    setSuccess("waiting");
    if (selectedDifficulty < 3) {
      setSelectedDifficulty(selectedDifficulty + 1);
      console.log(levels);
    } else {
      setPlay(false);
      // onReset();
    }
    setCurrQuestion(0);
  };
  const onBackToMenu = () => {
    if (selectedDifficulty < 3) {
      setLevels((prevLevels) =>
        prevLevels.map((level) =>
          level.category === selectedCategory
            ? {
                ...level,
                level:
                  success === "waiting"
                    ? selectedDifficulty
                    : selectedDifficulty + 1,
              }
            : level
        )
      );
    }
    setSuccess("waiting");
    setPlay(false);
    // setSelectedDifficulty(selectedDifficulty + 1);
    console.log(levels);
  };

  return (
    <div className={$.Wrapper}>
      {!play ? (
        <div className={$.MenuWrapper}>
          <h1 className={$.Special}>QuizGame</h1>

          <div className={$.UserInput}>
            <button onClick={() => onPlay("Geography", levels[0].level)}>
              Geography<span>Level {levels[0].level}</span>
            </button>
            <button onClick={() => onPlay("Music", levels[1].level)}>
              Music<span>Level {levels[1].level}</span>
            </button>
            <button onClick={() => onPlay("Cinematography", levels[2].level)}>
              Cinematography<span>Level {levels[2].level}</span>
            </button>
            <button onClick={() => onPlay("History", levels[3].level)}>
              History<span>Level {levels[3].level}</span>
            </button>
          </div>
          <span className={$.Button} onClick={() => navigate("/")}>
            Quit Game
          </span>
        </div>
      ) : (
        <Question
          cat={selectedCategory}
          diff={selectedDifficulty}
          currentQuestion={currQuestion}
          onMenu={() => onBackToMenu()}
          onEnd={(status) => setSuccess(status)}
        />
      )}
      <div className={`${$.Failed} ${success === false ? $.FailedTrue : null}`}>
        <h1>Failed!</h1>
        <p>Seems like you ain't quit got it...</p>
      </div>
      <div
        className={`${$.Success} ${success === true ? $.SuccessTrue : null}`}
      >
        <h1>Success!</h1>
        <p>Great! You're quite a smart, aren't you?</p>
        <button
          onClick={() => onNextLevel(selectedCategory, selectedDifficulty + 1)}
        >
          Next Level
        </button>
      </div>
    </div>
  );
};
export default QuizGame;
