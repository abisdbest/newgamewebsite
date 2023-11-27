const express = require('express')
const path = require('path')
const axios = require('axios')
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(cookieParser());
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});
app.get('/grab', (req, res) => {
  if (req.cookies.accesstoken) {
    axios.get('https://api.github.com/user#blooket', {
      headers: {
        'Authorization': 'Bearer ' + req.cookies.accesstoken.split("=")[1]
      }
    }).then((response) => {
      res.send(response.data)
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        res.json({ error: 'not authorized' })
      } else {
        console.error(error);
        res.send('error: ' + error)
      }
    })
  } else {
    res.json({ error: 'not authorized' })
  }
})
app.get('/success', (req, res) => {
  res.send(`
   <html>
     <body>
       <script>
         window.close();
       </script>
     </body>
   </html>
 `);
});
const GH_CLIENT_ID = "Iv1.b9cc7cbb515c23a0"
const GH_CLIENT_SECRET = "7dbfadbfe87f549719703ef2250edf3fa752324f"
app.get('/auth/github/callback', (req, res) => {
  axios.post(`https://github.com/login/oauth/access_token?client_id=${process.env.GH_CLIENT_ID}&client_secret=${process.env.GH_CLIENT_SECRET}&code=${req.query.code}` + "#blooket")
    .then(function(response) {
      let stringresp = response.data + ''
      let sCode = stringresp.split("&")[0];
      if (req.cookies.accesstoken) {
        res.clearCookie('accesstoken');
      }
      res.cookie('accesstoken', sCode, { maxAge: 4 * 24 * 60 * 60 * 1000, httpOnly: true });
      res.send(`<html>
     <body>
       <script>
         window.close();
       </script>
     </body>
   </html>`);
    })
    .catch(function(error) {
      if (error.response) {
        res.send(error.response.data + '\n' + error.response.status + '\n' + error.response.headers);
      } else if (error.request) {
        res.send(error.request)
      } else {
        res.send('Error', error.message);
      }
      console.log(error.config);
    });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
