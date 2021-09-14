const fs = require('fs');
const glob = require('glob');

const imageFormat = 'jpg';
const fileName = 2021;
const prefix = 'Mai';

export const renameImages = () => {
  glob(`media/*.${imageFormat}`, (err, images) => {
    images.forEach((img, i) => {
      fs.rename(img, `media/${prefix}-${fileName}-${i}.${imageFormat}`, () => {
        console.log(
          `${img} ${i} renamed to ${prefix}-${fileName}-${i}.${imageFormat}`
        );
        if (err) console.error(err);
      });
    });
  });
};

renameImages();
