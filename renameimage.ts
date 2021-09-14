const fs = require('fs');
const glob = require('glob');

const fileName = 2021;
const prefix = 'Juni';

glob(`media/*`, (err, images) => {
  images.forEach((img, i) => {
    const [fileExtension] = img.match(/\.[0-9a-z]+$/i);
    fs.rename(img, `media/${prefix}-${fileName}-${i}${fileExtension}`, () => {
      console.log(
        `${img} ${i} renamed to ${prefix}-${fileName}-${i}${fileExtension}`
      );
      if (err) console.error(err);
    });
  });
});
