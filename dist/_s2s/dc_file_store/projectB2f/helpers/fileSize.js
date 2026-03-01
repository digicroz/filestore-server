import { filesize } from 'filesize';

// src/_s2s/dc_file_store/projectB2f/helpers/fileSize.ts
var fileSizeInHumanFormat = (sizeInBytes) => {
  return filesize(sizeInBytes, { base: 2, standard: "jedec" });
};

export { fileSizeInHumanFormat };
//# sourceMappingURL=fileSize.js.map
//# sourceMappingURL=fileSize.js.map