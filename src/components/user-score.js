function UserScore(props) {
  const { score } = props;
  return <div className="score-area smoked-rounded">Score: {score}</div>;
}

export default UserScore;
