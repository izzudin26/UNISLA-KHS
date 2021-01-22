import axios from "axios";
import cheerio from "cheerio";
import { KhsModel, LoginResponse } from "../Model/index";

class SisfoService {
  async login(username: string, password: string): Promise<LoginResponse> {
    const data = `username=${username}&password=${password}&level=7`;
    const response = await axios.post(
      "http://sisfo.unisla.ac.id/login.php",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const cookie = response.headers["set-cookie"].toString().split(";")[0];
    let message =
      response.data ==
      `<script language="javascript">alert("Login Mahasiswa Berhasil!"); document.location="users/";</script>`
        ? "success"
        : "failed";
    return {
      cookie,
      message,
    };
  }

  async getKhs(semester: number, Cookie?: string): Promise<any> {
    const ReqData = `pilihsmt=${semester}`;
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.post(
          "http://sisfo.unisla.ac.id/users/index.php/nilai",
          ReqData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Cookie,
            },
          }
        );

        let khsData: Array<KhsModel> = [];
        const $ = cheerio.load(response.data);
        //if unauthorized
        $("title").html() == "Login SIAKAD UNISLA" && resolve("unauthorized");

        //do scrap
        $(".table").each((i, table) => {
          $(table)
            .find(".td")
            .each((i, trTag) => {
              let rowData: KhsModel = {
                mataKuliah: $(trTag)
                  .find("td")
                  .next()
                  .next()
                  .html()
                  ?.toString(),
                nilai: $(trTag)
                  .find("td")
                  .next()
                  .next()
                  .next()
                  .html()
                  ?.toString(),
                sks: $(trTag).find("td").last().text(),
              };
              khsData.push(rowData);
            });
        });
        resolve(khsData);
      } catch (error) {
        error.code == "ERR_HTTP_INVALID_HEADER_VALUE" && reject("null cookie");
        reject(error);
      }
    });
  }
}

export default new SisfoService();
