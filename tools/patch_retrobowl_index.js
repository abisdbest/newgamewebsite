const fs = require('fs');

const file = 'source/retro bowl/index.html';
let content = fs.readFileSync(file, 'utf8');

const target = '</style></head>';
const replacement = `</style>
<script>
  window.addEventListener('unhandledrejection', function(e) {
    if (e && e.reason && (e.reason.name === 'DataCloneError' || e.reason.name === 'EncodingError' || (typeof e.reason.message === 'string' && e.reason.message.includes('decode')))) {
      e.preventDefault();
      console.warn('Prevented audio decode freeze:', e.reason);
    }
  });
  window.addEventListener('error', function(e) {
    if (e && (e.message && (e.message.includes('decode audio data') || e.message.includes('DataCloneError') || e.message.includes('Illegal file handle')))) {
      e.preventDefault();
      console.warn('Prevented GameMaker freeze:', e.message);
    }
  });
</script>
</head>`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully patched source/retro bowl/index.html with error shield!');
} else {
  console.error('Target not found in source/retro bowl/index.html');
}
