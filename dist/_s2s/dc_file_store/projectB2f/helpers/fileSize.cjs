'use strict';

var filesize = require('filesize');

// src/_s2s/dc_file_store/projectB2f/helpers/fileSize.ts
var fileSizeInHumanFormat = (sizeInBytes) => {
  return filesize.filesize(sizeInBytes, { base: 2, standard: "jedec" });
};

exports.fileSizeInHumanFormat = fileSizeInHumanFormat;
//# sourceMappingURL=fileSize.cjs.map
//# sourceMappingURL=fileSize.cjs.map