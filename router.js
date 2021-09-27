const Authentication = require("./controllers/authentication");

modules.exports = function (app) {
  app.post("/signup", Authentication.signup);
};
