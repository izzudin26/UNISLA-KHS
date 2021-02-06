import sisfoService from "../services/sisfoService";
import { Request, Response } from "express";

class sisfoController {
  async login(req: Request, res: Response): Promise<Response> {
    let { username, password } = req.body;
    let login = await sisfoService.login(username, password);
    return login.message == "success"
      ? res.status(200).send({ message: "Success Login", cookie: login.cookie })
      : res.status(403).send({
          message: "Failed Login Wrong username or password",
          cookie: login.cookie,
        });
  }

  async getKhs(req: Request, res: Response): Promise<Response> {
    const cookie = req.headers["x-cookie-sisfo"]?.toString();
    let semester = parseInt(req.params.semester);
    try {
      let result = await sisfoService.getKhs(semester, cookie);
      return result == "unauthorized"
        ? res.status(403).send({ message: "Unauthorized belum login" })
        : result.length != 0 || !result
        ? res.status(200).send({
            data: result,
            message: "Success get KHS",
          })
        : res.status(500).send({
            message: `Not Found semester ${semester}`,
          });
    } catch (error) {
      return error == "null cookie"
        ? res.status(400).send({ message: "Cookie should send from client" })
        : res.status(500).send({
            message: "Something error",
          });
    }
  }
}

export default new sisfoController();
