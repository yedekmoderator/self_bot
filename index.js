const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('GIF engellemeye hazır.'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const discord = require('discord.js');
const client = new discord.Client()
client.login('ODUyODkzMTkxODgyNTM5MDI5.YNgv_w.LRb3TJ6YLfEtR4cTAJaG2YeRKd0');