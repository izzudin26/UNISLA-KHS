import axios from "axios"
import { url } from "./url"

export const login = async (username, password) => {
    return new Promise((resolve, reject) => {
        const data = {
            username, password
        }
        axios.post(`${url}/login`, data)
            .then((response) => {
                const message = response.status == "Success " ? "Success" : "Failed"
                const {cookie} = response.data
                resolve({message, cookie})

            }).catch((err) => {
                reject(err == "Error: Request failed with status code 403" ? "wrong username password" : err)
            });
    })
}

export const getKhs = (semester, cookie) => {
    return new Promise((resolve,reject) => {
        axios.get(`${url}/khs/${semester}`, {
            headers: {
                "x-cookie-sisfo": cookie,
            },
        })
        .then((response) => {
            const data = response.data
            resolve(data)
        }).catch((err) => {
            reject(err == "Error: Request failed with status code 403" ? "Unauthorized" : err)
        });
    })
}