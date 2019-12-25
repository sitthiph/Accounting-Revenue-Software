const api = require('./src/api/');
const PORT = process.env.PORT || 3000;

// Starting the server, syncing our models ------------------------------------/
  api.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.");
  });
