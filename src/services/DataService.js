import axios from "axios";

export const fetchData = async (resource) => {
    try {
        const response = await axios.get(urlData + resource, {
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

export const postData = async (resource, request) => {
    try {
        const response = await axios.post(urlData + resource, request, {
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

export const urlData = "http://localhost:8080/";