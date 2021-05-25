const fs = require("fs");
const glob = require("glob");

const imageFormat = "png";
const fileName = 2021; // 1995_0.jpg, 1995_1.jpg, 1995_2.jpg

const above = 185;

glob(`media/*.${imageFormat}`, (err, images) => {
    console.log(images)

  images.forEach((img, i) => {

    console.log(img)

    let number = above + i;
    fs.rename(img, `media/${number}_${fileName}.${imageFormat}`, () => {
      console.log(`${img} renamed to ${fileName}_${i}.${imageFormat}`);
      if (err) console.error(err);
    })
  }
  );
});


