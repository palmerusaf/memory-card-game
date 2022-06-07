beforeEach(() => {
  jest.resetModules();
});

it("Scoring first play causes getScore to return 5", () => {
  const { ScoreKeeper } = require("../modules/score-keeper");
  ScoreKeeper.score('foo');
  expect(ScoreKeeper.getScore()).toEqual(5)
});

it("Scoring second different play causes getScore to return 10", () => {
  const { ScoreKeeper } = require("../modules/score-keeper");
  ScoreKeeper.score('foo');
  ScoreKeeper.score('bar');
  expect(ScoreKeeper.getScore()).toEqual(10)
});

it("Scoring same play twice in a row causes getScore to reset 0", () => {
  const { ScoreKeeper } = require("../modules/score-keeper");
  ScoreKeeper.score('foo');
  ScoreKeeper.score('foo');
  expect(ScoreKeeper.getScore()).toEqual(0)
});

it("Scoring same play anytime after reset causes getScore to reset to 0", () => {
  const { ScoreKeeper } = require("../modules/score-keeper");
  ScoreKeeper.score('foo');
  ScoreKeeper.score('bar');
  ScoreKeeper.score('foo');
  expect(ScoreKeeper.getScore()).toEqual(0)
});

it("Scoring same play twice in a row causes getHighScore to return 10", () => {
  const { ScoreKeeper } = require("../modules/score-keeper");
  ScoreKeeper.score('foo');
  ScoreKeeper.score('bar');
  ScoreKeeper.score('foo');
  expect(ScoreKeeper.getHighScore()).toEqual(10)
});
