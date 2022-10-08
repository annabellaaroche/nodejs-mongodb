const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/file.controller");

let routes = (app) => {
  router.post("/api/upload", [authJwt.verifyToken, authJwt.isAdmin], controller.upload);
  router.get("/api/files", [authJwt.verifyToken, authJwt.isAdmin], controller.getListFiles);
  router.get("/api/files/:name", [authJwt.verifyToken, authJwt.isAdmin], controller.download);

  app.use(router);
};

module.exports = routes;