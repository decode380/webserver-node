import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';
import hbs from "hbs";
import dotenv from 'dotenv';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const PORT = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res)=> {
  res.render('home', {
    name: 'Miguel Fandiño',
    template: 'Road Trip'
  });
});

app.get('/generic', (req, res)=> {
  res.render('generic');
});

app.get('/elements', (req, res)=> {
  res.render('elements');

});

// app.get('*', (req, res)=> {
//   // res.status(404);
//   res.sendFile(__dirname + '/public/404.html');
// });

app.listen(PORT, ()=> {console.log(`Listen in port ${PORT}`);});