function HighScore(props) {
  const { highScore } = props;
  return (
    <div className="score-area smoked-rounded">High Score: {highScore}</div>
  );
}

export default HighScore;
