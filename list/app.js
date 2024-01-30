const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true })); 

const songs = [
  'Sgt. Peppers Lonely Hearts Club Band',
  'With a Little Help from My Friends',
  'Lucy in git remote add origin https://github.com/Tanya1786/practice.gitthe Sky with Diamonds',
  'Getting Better',
  'Fixing a Hole',
  'Shes Leaving Home',
  'Being for the Benefit of Mr. Kite!',
  'Within You Without You',
  'When Im Sixty-Four',
  'Lovely Rita',
  'Good Morning Good Morning',
  'Sgt. Peppers Lonely Hearts Club Band (Reprise)',
  'A Day in the Life'
];

app.get('/', (req, res) => {
  res.render('list', { songs });
});

app.post('/add-song', (req, res) => {
  const newSong = req.body.newSong;
  if (newSong) {
    songs.push(newSong);
  }
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running');
});
