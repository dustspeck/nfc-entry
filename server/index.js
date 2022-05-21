require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { markEntry, getData } = require('./controllers/entry.controller');
const { protectRoute } = require('./middlewares/protect.middleware');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
	res.send('Server Up');
});

app.post('/data', protectRoute, getData);
app.post('/mark', protectRoute, markEntry);

app.listen(PORT, () => {
	console.log(`Listening at: ${PORT}`);
});

module.exports = app;
