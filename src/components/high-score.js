function HighScore(props) {
  const { highScore } = props;
  return (
    <div className="score-item smoked-rounded">High Score: {highScore}</div>
  );
}

export default HighScore;
