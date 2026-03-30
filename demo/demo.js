import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser('my-super-secret-key'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'cookieValue', { signed: true });
  res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
  const cookieValue = req.signedCookies.myCookie;
  if (cookieValue) {
    res.send(`Cookie value: ${cookieValue}`);
  } else {
    res.send('No signed cookie found.');
  }
});