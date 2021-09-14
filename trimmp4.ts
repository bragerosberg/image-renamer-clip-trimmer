const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const glob = require('glob');
const fs = require('fs');
ffmpeg.setFfmpegPath(ffmpegPath);

/******************** CONFIG ******************** 
  startTime: when do you want the new start time to be (hh:mm:ss)

  clipDuration: how long do you want the clip to be in seconds (e.g. 30)

  Change the consts below to the desired naming you want.
*/

const startTime: string = '00:02:30';
const clipDuration: number = 30;

glob(`*.mp4`, (_, clips) => {
  clips.forEach((clip, i) => {
    ffmpeg(clip)
      .setStartTime(startTime)
      .setDuration(clipDuration)
      .output(`${clip}_${i}.mp4`)
      .on('end', err => {
        if (!err) {
          console.log(`${clip} converted`);
          fs.unlinkSync(clip);
        }
      })
      .on('error', err => {
        console.error(err);
      })
      .run();
  });
});
