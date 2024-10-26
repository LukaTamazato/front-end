import axios from "axios";
import { useAlerta } from "../context/AlertaContext";

export const fetchData = async (resource) => {
  try {
    const response = await axios.get(urlData + resource, {
      headers: {
        Authorization: `Bearer ${sessionStorage.TOKEN}`,
      },
    });

    return response.data;
  } catch (err) {
    return {
      error: true,
      message: err.response.data.message,
      data: err.response.data,
      status: err.response.status
    }
  }
};

export const postData = async (resource, request) => {

  try {
    const response = await axios.post(urlData + resource, request, {
      headers: {
        Authorization: `Bearer ${sessionStorage.TOKEN}`,
      },
    });

    return response.data;
  } catch (err) {
    return {
      error: true,
      message: err.response.data.message,
      data: err.response.data,
      status: err.response.status
    }
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
