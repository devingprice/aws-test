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
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
  };
  connection.connect(function (err) {
    if (err) {
      response.success = false;
      response.message = "Database connection failed: " + err.stack;
      console.error("Database connection failed: " + err.stack);

      res.send(response);
      return;
    }

    response.success = true;
    response.message = "Connected to database.";
    console.error(response.message);

    res.send(response);
  });

  connection.end();
};
