function UserScore(props) {
  const { score } = props;
  return <div className="score-item smoked-rounded">Score: {score}</div>;
}

export default UserScore;
