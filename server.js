const express = require('express');
const app = express();
app.use(express.json({ extended: false }));

//helpers
const getAllThirdLetters = require('./helpers/getAllThirdLetters.js');

app.post('/test', (req, res) => {
  const returnObj = getAllThirdLetters(req.body.string_to_cut);

  return res.json(returnObj);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
