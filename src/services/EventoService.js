import axios from "axios";
import { urlData } from "./DataService";

export const buscarEventos = async () => {
    try {
        const response = await axios.get("http://localhost:8080/eventos", {
            headers: {
              'Authorization': `Bearer ${sessionStorage.TOKEN}`
            }
        })

        if (response.status !== 200) return;

        return response.data;
    } catch (err) {
        console.log(err.response.status);
    }
}

export const postEvento = async (request) => {
    try {
        const response = await axios.post(urlData + 'eventos', request, {
            headers: {
              'Authorization': `Bearer ${sessionStorage.TOKEN}`
            }
        })

        // if (response.status !== 200) return;

        return response.data;
    } catch (err) {
        console.log(err.response.status);
    }
}