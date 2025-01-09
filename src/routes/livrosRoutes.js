import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Routes();

routes.get("/livros", LivroController.listarLivros);