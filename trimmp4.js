const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const glob = require('glob');
const fs = require('fs');
ffmpeg.setFfmpegPath(ffmpegPath)

const clipFormat = 'mp4';

glob(`*.${clipFormat}`, (_, clips) => {
  clips.forEach((clip, i) => {

   ffmpeg(clip)
    .setStartTime('00:02:30')
    .setDuration(30)
    .output(`${clip}_${i}.${clipFormat}`)
    .on('end', (err) => {
      if(!err) { 
        console.log(`${clip} converted`) 
        fs.unlinkSync(clip);
      }
    })
    .on('error', (err) => {
      console.error(err)
    }).run()
  });
});
