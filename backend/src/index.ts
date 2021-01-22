import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mainRoutes from "./routes/index";

const port = process.env.PORT ?? 8000;

class App {
  constructor(public app: Application = express()) {
    this.plugins();
    this.routes();
  }

  plugins(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }

  routes(): void {
    this.app.use("/", mainRoutes);
  }
}

const app = new App().app;
app.listen(port, () => {
  console.log(`Running http://localhost:${port}`);
});
