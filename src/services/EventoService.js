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

// TODO: Otimizar a criação do evento em um único post
export const postEvento = async (request, imgRequest) => {
    request.orcamento = request.orcamento.replaceAll('.','').replace(',','.');
    try {
        const response = await axios.post(urlData + 'eventos', request, {
            headers: {
              'Authorization': `Bearer ${sessionStorage.TOKEN}`
            }
        })

        await patchImgEvento(imgRequest, response.data.id);

        return response;
    } catch (err) {
        console.log(err.response.status);
    }
}

export const patchImgEvento = async (request, id) => {
    try {
        const response = await axios.patch(`${urlData}eventos/${id}/upload`, request, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.TOKEN}`
            }
        });

        // if (response.status !== 200) return;

        return response.data;
    } catch (err) {
        console.log(err.response.status);
    }
}

export const putEvento = async (request, id) => {
    console.log(request)
    if (!(typeof request.orcamento === 'number')) request.orcamento = request.orcamento.replaceAll('.','').replace(',','.');
    try {
        const response = await axios.put(urlData + 'eventos/' + id, request, {
            headers: {
              'Authorization': `Bearer ${sessionStorage.TOKEN}`
            }
        })

        return response.data;
    } catch (err) {
        console.error('Erro ao atualizar: ', err);
    }
}

export const deleteEvento = async (id) => {
    try {
        const response = await axios.delete(urlData + 'eventos/' + id, {
            headers: {
              'Authorization': `Bearer ${sessionStorage.TOKEN}`
            }
        })

        return response;
    } catch (err) {
        console.error('Erro ao deletar: ', err);
    }
}