'use strict';

// src/_s2s/dc_file_store/projectB2f/constants/support.ts
var supportMethodIconsNamesArr = ["whatsapp", "email", "instagram", "phone", "telegram", "discord"];
var supportMethodIconsNamesObj = Object.fromEntries(
  supportMethodIconsNamesArr.map((data, i) => {
    return [data, data];
  })
);
var supportMethodIconsNames = {
  arr: supportMethodIconsNamesArr,
  obj: supportMethodIconsNamesObj
};

exports.supportMethodIconsNames = supportMethodIconsNames;
//# sourceMappingURL=support.cjs.map
//# sourceMappingURL=support.cjs.map