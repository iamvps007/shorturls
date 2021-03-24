module.exports = (app) => {
  var router = require("express").Router();

  const shortUrls = require("../controllers/constroller");

  /** user Login */

  router.post("/login",shortUrls.userLogin);

  /** user add */
  router.post("/user", shortUrls.addUser);

  /** user delete */

  router.delete("/user/remove",shortUrls.userDelete);



  /** create link */

  router.post("/link",shortUrls.createLink);
  



  /** view user profile */
  router.get("/user", shortUrls.viewUser);



  app.use("/api", router);
};
