const fs = require("fs");
const glob = require("glob");

const imageFormat = "jpg";
const fileName = 2020;

let index = 0;

glob(`media/*.${imageFormat}`, (err, images) => {
  images.forEach((img, i) => {
    index += 1;
    fs.rename(img, `media/${index}_2020.${imageFormat}`, () => {
      console.log(`${img} ${i} renamed to ${fileName}_${i}.${imageFormat}`);
      if (err) console.error(err);
    });
  });
});
