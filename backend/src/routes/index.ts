import { Router } from "express";
import sisfoController from "../controller/sisfoController";

class mainRoutes {
  constructor(public router: Router = Router()) {
    this.routes();
  }

  routes(): void {
    this.router.post("/login", sisfoController.login);
    this.router.get("/khs/:semester", sisfoController.getKhs);
  }
}

export default new mainRoutes().router;
