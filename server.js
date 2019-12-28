const api = require('./src/api/');
const PORT = process.env.PORT || 3000;

// Starting the server, syncing our models ------------------------------------/
  api.listen(PORT, () => {
    console.log("==> 🌎  Listening on port " + PORT + ". Visit http://localhost:" + PORT + "/ in your browser.");
  });
