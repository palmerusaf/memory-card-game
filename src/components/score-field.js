import UserScore from "./user-score.js";
import HighScore from "./high-score.js";

export default function ScoreField(props) {
  const { score, highScore } = props;

  return (
    <div className="score-field">
      <UserScore score={score} />
      <HighScore highScore={highScore} />
    </div>
  );
}
