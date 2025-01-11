import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", AutorController.listarAutores);
routes.get("/autos/:id", AutorController.listarAutorPorId);
routes.post("/autor/", AutorController.cadastrarAutor);
routes.put("/autor/:id", AutorController.atualizarAutor);
routes.delete("/autor/:id", AutorController.excluirAutor);

export default routes;