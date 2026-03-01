'use strict';

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

exports.gameTypes = gameTypes;
//# sourceMappingURL=games.cjs.map
//# sourceMappingURL=games.cjs.map