const fs = require('fs'); 
const glob = require("glob");

// Config Variables
const imageFormat = "jpg"; 
const baseName = 1995; // 1995_0.jpg, 1995_1.jpg, 1995_2.jpg

glob(`media/*.${imageFormat}`, (err, images) => {
  images.forEach((img, i) => fs.rename(img, `media/${baseName}_${i}.${imageFormat}`, () => {
    console.log(`${img} renamed to ${baseName}_${i}.${imageFormat}`);
    if(err) console.error(err);
  }));
});
