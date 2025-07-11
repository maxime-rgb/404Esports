
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.'));

app.post('/contact', (req, res) => {
  console.log('Formulaire reçu:', req.body);
  res.send('<h1>Merci pour votre message !</h1><a href="index.html">Retour</a>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur actif sur le port ${PORT}`));
