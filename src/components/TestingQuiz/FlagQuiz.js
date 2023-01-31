import React, { useState, useEffect } from "react";
import FlagQuestion from "./FlagQuestion";
import Result from "./Result";

const API_URL = "https://countriesnow.space/api/v0.1/countries/flag/images";

function FlagQuiz() {
  const [countries, setCountries] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  function handleAnswer(answer) {
    if (answer === countries[currentQuestion].name) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion === countries.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (showResult) {
    return <Result score={score} total={countries.length} />;
  }

  return (
    <div>
      <FlagQuestion
        flag={countries[currentQuestion].image}
        choices={countries.map((country) => country.name)}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default FlagQuiz;
