import axios from "axios"

class SisfoService {
    async login(username: string, password: string): Promise<string>{
        const data = `username=${username}&password=${password}&level=7`
        const loginAxios = await axios.post("http://sisfo.unisla.ac.id/login.php", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        return loginAxios.data == `<script language="javascript">alert("Login Mahasiswa Berhasil!"); document.location="users/";</script>`
        ? "success" : "failed"

    }
}