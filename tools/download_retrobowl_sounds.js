const https = require('https');
const fs = require('fs');
const path = require('path');

const sounds = [
  'snd_audible',
  'snd_audience_dis',
  'snd_audience_fg',
  'snd_audience_idle',
  'snd_beep',
  'snd_beep2',
  'snd_bounce',
  'snd_click',
  'snd_kick',
  'snd_music',
  'snd_oof1',
  'snd_oof2',
  'snd_oof3',
  'snd_post',
  'snd_purchase',
  'snd_tackle',
  'snd_throw',
  'snd_timeout'
];

const extensions = ['.ogg', '.mp3'];
const base = 'https://raw.githubusercontent.com/HighlandGame/highlandgame.github.io/main/';
const destDir = path.join('source', 'retro bowl', 'html5game');

function download(filename) {
  return new Promise(resolve => {
    const dest = path.join(destDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(base + filename, res => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`[OK] ${filename} (${fs.statSync(dest).size} bytes)`);
            resolve(true);
          });
        });
      } else {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        console.log(`[404] ${filename}`);
        resolve(false);
      }
    }).on('error', err => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      console.log(`[ERR] ${filename}: ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  for (const s of sounds) {
    for (const ext of extensions) {
      await download(s + ext);
    }
  }
}

main().catch(console.error);
