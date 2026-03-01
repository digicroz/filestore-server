// src/_s2s/dc_file_store/projectB2f/constants/games.ts
var gameTypesArr = ["contest", "challenge", "tournament"];
var gameTypesObject = gameTypesArr.reduce((obj, type) => {
  obj[type] = type;
  return obj;
}, {});
var gameTypes = {
  arr: gameTypesArr,
  object: gameTypesObject
};

export { gameTypes };
//# sourceMappingURL=games.js.map
//# sourceMappingURL=games.js.map