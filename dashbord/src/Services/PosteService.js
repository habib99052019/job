
import axios from 'axios';



import { getSession } from "../utils/SessionUtils";


const baseUrl = process.env.REACT_APP_API;


const config = {
  headers: { Authorization: `Bearer ${getSession("token")}` },
};

export const getAllPostes = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/postes/getallpostes` ,config);
    return response.data;
  } catch (error) {
    console.error('Error fetching postes:', error);
    throw error;
  }
};

export const getPosteById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}api/postes/po/${id}` ,config);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};




export async function createPoste(objPoste) {
    const body = {
      titre: objPoste.titre,
      description: objPoste.description,
      competences: objPoste.competences,
      categories: objPoste.categories,
      image: objPoste.image,
    };
    try {
      const response = await axios.post(`${baseUrl}api/postes/addposte`, body ,config);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  export const updatePoste = async (posteId, posteData) => {
    try {
      const response = await axios.put(`${baseUrl}api/postes/updateposte/${posteId}`, posteData ,config);
      return response;
    } catch (error) {
      console.error('Error updating poste:', error);
      throw error;
    }
  };
  

export const deletePoste = async (posteId) => {
  try {
    const response = await axios.delete(`${baseUrl}api/postes/deletepo/${posteId}` ,config);
    return response.data;
  } catch (error) {
    console.error('Error deleting poste:', error);
    throw error;
  }
};

export const getLatestPostes = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/postes/dernier/job`,config);
    return response.data;
  } catch (error) {
    console.error('Error fetching postes:', error);
    throw error;
  }
};
export const countTotalPostes = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/postes/count/poste` ,config);
    return response.data.count;
  } catch (error) {
    console.error('Error counting total postes:', error);
    throw error; // Remarque : Vous pouvez gérer les erreurs comme vous le souhaitez
  }
};


export const countTotalPourcentagesPostes = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/postes/percentage/PostesAdded` ,config);
    return response.data;
  } catch (error) {
    console.error('Error counting total postes:', error);
    throw error; // Remarque : Vous pouvez gérer les erreurs comme vous le souhaitez
  }
};



