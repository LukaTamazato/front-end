import axios from "axios";

export const fetchData = async (resource) => {
  try {
    const response = await axios.get(urlData + resource, {
      headers: {
        Authorization: `Bearer ${sessionStorage.TOKEN}`,
      },
    });

    if (response.status !== 200) return;

    return response.data;
  } catch (err) {
    console.error(err.response.data);
  }
};

export const postData = async (resource, request) => {
  try {
    const response = await axios.post(urlData + resource, request, {
      headers: {
        Authorization: `Bearer ${sessionStorage.TOKEN}`,
      },
    });

    return response;
  } catch (err) {
    console.error(err.response.data);
  }
};

export const putData = async (resource, request, id) => {
  try {
    const response = await axios.put(`${urlData}${resource}/${id}`, request, {
      headers: {
        Authorization: `Bearer ${sessionStorage.TOKEN}`,
      },
    });

    return response;
  } catch (err) {
    console.error(err.response.data);
  }
};

export const urlData = "http://localhost:8080/";
