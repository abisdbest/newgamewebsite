class MiscUtils {
  static getNumberEnumKeys(myEnum) {
    return Object.keys(myEnum).map((key) => myEnum[key]).filter((value) => typeof value === "number");
  }
  static getStringEnumKeys(myEnum) {
    return Object.keys(myEnum).filter((key) => isNaN(Number(key)));
  }
  static getStringEnumValues(myEnum) {
    return MiscUtils.getStringEnumKeys(myEnum).map((key) => myEnum[key]);
  }
  static clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
}
const OCTAGON_SIDES_COUNT = 8;
const OBJECT_LENGTH = 1.3;
const OBJECT_WIDTH = 0.7;
const OBJECT_HEIGHT = 0.3;
const TUNNEL_EDGE_WIDTH = 0.84;
const TUNNEL_EDGE_RADIUS = 1;
const ANIMATION_DURATION_IN_MS = 240;
const PLAYER_ANIMATION_INPUT_ACCEPT_FACTOR_FOR_SIDESTEP = 0.5;
const PLAYER_ANIMATION_INPUT_ACCEPT_FACTOR_FOR_VERTICAL = 0.9;
const PLAYER_MOVE_SPEED = 45e-4;
const PLAYER_RADIUS_CHANGE_SPEED = 0.02;
const SCREEN_WIDTH = 560;
const SCREEN_HEIGHT = 560;
var PlayerRadiusEnum = /* @__PURE__ */ ((PlayerRadiusEnum2) => {
  PlayerRadiusEnum2[PlayerRadiusEnum2["Short"] = 0.85] = "Short";
  PlayerRadiusEnum2[PlayerRadiusEnum2["Tall"] = 0.5] = "Tall";
  return PlayerRadiusEnum2;
})(PlayerRadiusEnum || {});
var StorageKeyEnum = /* @__PURE__ */ ((StorageKeyEnum2) => {
  StorageKeyEnum2["IsSoundOn"] = "isSoundOn";
  StorageKeyEnum2["IsMusicOn"] = "isMusicOn";
  StorageKeyEnum2["PreviousGameState"] = "previousGameState";
  StorageKeyEnum2["PreviousVersionId"] = "previousVersionId";
  StorageKeyEnum2["CompletedLevelIds"] = "completedLevelIds";
  return StorageKeyEnum2;
})(StorageKeyEnum || {});
var StorageValueEnum = /* @__PURE__ */ ((StorageValueEnum2) => {
  StorageValueEnum2["Yes"] = "yes";
  StorageValueEnum2["No"] = "no";
  return StorageValueEnum2;
})(StorageValueEnum || {});
var DeathReasonEnum = /* @__PURE__ */ ((DeathReasonEnum2) => {
  DeathReasonEnum2["Crashed"] = "Crashed";
  DeathReasonEnum2["Drowned"] = "Drowned";
  DeathReasonEnum2["Vanished"] = "Vanished";
  DeathReasonEnum2["Burned"] = "Burned";
  return DeathReasonEnum2;
})(DeathReasonEnum || {});
var ObjectTypeEnum = /* @__PURE__ */ ((ObjectTypeEnum2) => {
  ObjectTypeEnum2["Short"] = "short";
  ObjectTypeEnum2["Tall"] = "tall";
  ObjectTypeEnum2["Ramp"] = "ramp";
  ObjectTypeEnum2["Water"] = "water";
  ObjectTypeEnum2["Void"] = "void";
  ObjectTypeEnum2["Lava"] = "lava";
  return ObjectTypeEnum2;
})(ObjectTypeEnum || {});
const ALL_OBJECT_TYPES = MiscUtils.getStringEnumValues(ObjectTypeEnum);
var InputEnum = /* @__PURE__ */ ((InputEnum2) => {
  InputEnum2[InputEnum2["Up"] = 0] = "Up";
  InputEnum2[InputEnum2["Left"] = 1] = "Left";
  InputEnum2[InputEnum2["Right"] = 2] = "Right";
  return InputEnum2;
})(InputEnum || {});
var SoundFileEnum = /* @__PURE__ */ ((SoundFileEnum2) => {
  SoundFileEnum2["BackgroundMusic"] = "env2.mp3";
  SoundFileEnum2["Drum"] = "drum.wav";
  SoundFileEnum2["Coin"] = "coin.mp3";
  SoundFileEnum2["Victory"] = "victory.mp3";
  SoundFileEnum2["Death"] = "death.wav";
  return SoundFileEnum2;
})(SoundFileEnum || {});
const ALL_SOUND_FILE_PATHS = MiscUtils.getStringEnumValues(SoundFileEnum);
export {
  ANIMATION_DURATION_IN_MS as A,
  DeathReasonEnum as D,
  InputEnum as I,
  OBJECT_LENGTH as O,
  PlayerRadiusEnum as P,
  SoundFileEnum as S,
  TUNNEL_EDGE_RADIUS as T,
  OBJECT_HEIGHT as a,
  OBJECT_WIDTH as b,
  ObjectTypeEnum as c,
  TUNNEL_EDGE_WIDTH as d,
  PLAYER_MOVE_SPEED as e,
  PLAYER_RADIUS_CHANGE_SPEED as f,
  PLAYER_ANIMATION_INPUT_ACCEPT_FACTOR_FOR_SIDESTEP as g,
  OCTAGON_SIDES_COUNT as h,
  PLAYER_ANIMATION_INPUT_ACCEPT_FACTOR_FOR_VERTICAL as i,
  ALL_SOUND_FILE_PATHS as j,
  StorageKeyEnum as k,
  StorageValueEnum as l,
  SCREEN_WIDTH as m,
  SCREEN_HEIGHT as n,
  ALL_OBJECT_TYPES as o
};
