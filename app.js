import * as Tone from 'tone';
import express from 'express';
import session from 'express-session';
import lodash from 'lodash';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import ViteExpress from 'vite-express';
import axios from 'axios';


const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});


async function showDogPhoto(evt) {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    let imgUrl = response.data.message;
    console.log(response);
    document.querySelector("#dog-image").innerHTML = `<img src = ${imgUrl}>`;
  }
  
  document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);



