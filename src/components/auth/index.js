// Tadeo Almiron
const { Router } = require("express");
const authController = require("./controller/authController");
const { isAuthenticated } = require("../../utils/middlewares/AuthMiddleware");
module.exports = app =>{
  const router = new Router();
  app.use("/auth", router);
  router.post("/login",  authController.login);
  router.post("/recovery", authController.recovery);
  router.post("/verifyToken", isAuthenticated, (req, res, next)=>{
    res.json({response: true});
  });

}