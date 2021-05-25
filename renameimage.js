const fs = require("fs");
const glob = require("glob");

const imageFormat = "png";
const fileName = 'addBaseNameHere';


glob(`*.${imageFormat}`, (err, images) => {
  images.forEach((img, i) => {
    fs.rename(img, `${fileName}.${imageFormat}`, () => {
      console.log(`${img} renamed to ${fileName}_${i}.${imageFormat}`);
      if (err) console.error(err);
    })
  }
  );
});


