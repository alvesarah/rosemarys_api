import express from "express";

import portfolioController from "./controllers/portfolio-controller.js";

import database from "./database/sqlite-db.js";

import cors from "cors";

const app = express()

app.use(express.json());

app.use(cors());

generalMiddleware(app);

portfolioController(app, database);

export default app;