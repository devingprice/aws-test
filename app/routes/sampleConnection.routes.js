module.exports = (app) => {
  const sampleConnection = require("../controllers/sampleConnection.controller");
  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", sampleConnection.findAll);

  app.use("/api/sampleConnection", router);
};
