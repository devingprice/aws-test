// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  var mysql = require("mysql");

  var connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
  });

  let response = {
    message: null,
    success: null,
  };
  connection.connect(function (err) {
    if (err) {
      response.success = false;
      response.message = "Database connection failed: " + err.stack;
      return;
    }

    response.success = true;
    response.message = "Connected to database.";
  });

  connection.end();

  res.send(response);
};
