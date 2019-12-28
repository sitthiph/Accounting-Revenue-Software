module.exports = function(app) {
  // Get all examples
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

};
