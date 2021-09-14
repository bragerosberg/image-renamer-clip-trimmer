const fs = require('fs');
const glob = require('glob');

/******************** CONFIG ******************** 
  fileYear: what year are the files from (e.g: 2021)

  prefix: what context is the file (e.g: June, Wedding, Christmas)

  Change the consts below to the desired naming you want (String | Number)
*/

const fileYear: string | number = 2021;
const prefix: string | number = 'Juni';

// You don't need to change anything below

glob(`media/*`, (err, images) => {
  images.forEach((img, i) => {
    const [fileExtension] = img.match(/\.[0-9a-z]+$/i);
    fs.rename(img, `media/${prefix}-${fileYear}-${i}${fileExtension}`, () => {
      console.log(
        `${img} ${i} renamed to ${prefix}-${fileYear}-${i}${fileExtension}`
      );
      if (err) console.error(err);
    });
  });
});
