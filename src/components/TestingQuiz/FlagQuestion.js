function FlagQuestion({ flag, choices, handleAnswer }) {
  return (
    <div>
      <img src={flag} alt="flag" />
      {choices.map((choice) => (
        <button key={choice} onClick={() => handleAnswer(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default FlagQuestion;
