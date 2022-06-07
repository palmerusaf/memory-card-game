export const ScoreKeeper = (() => {
  let _score = 0;
  let _highScore = 0;
  let _previousPlays = [];

  const getScore = () => _score;

  const getHighScore = () => _highScore;

  const score = (play) => {
    const playedBefore = _previousPlays.some((prePlay) => prePlay === play);
    if (playedBefore) {
      _score = 0;
      _previousPlays = [];
      return;
    }
    _score += 5;
    _previousPlays.push(play);
    if (_score > _highScore) _highScore = _score;
  };

  return {
    getScore,
    getHighScore,
    score,
  };
})();
