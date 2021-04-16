const fs = require("fs");
const glob = require("glob");

const imageFormat = "jpg";
const fileName = 1995; // 1995_0.jpg, 1995_1.jpg, 1995_2.jpg

glob(`media/*.${imageFormat}`, (err, images) => {
  images.forEach((img, i) =>
    fs.rename(img, `media/${fileName}_${i}.${imageFormat}`, () => {
      console.log(`${img} renamed to ${fileName}_${i}.${imageFormat}`);
      if (err) console.error(err);
    })
  );
});
