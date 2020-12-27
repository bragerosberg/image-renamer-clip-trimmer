const fs = require('fs'); 
const glob = require("glob");

// Global Variables
const imageFormat = "jpg";
const year = 1995;

glob(`media/*.${imageFormat}`, (er, images) => {
  images.forEach((img, i) => fs.rename(img, `media/${year}_${i}.${imageFormat}`, () => {
    console.log(`${img} renamed to ${year}_${i}.${imageFormat}`);
  }));
});