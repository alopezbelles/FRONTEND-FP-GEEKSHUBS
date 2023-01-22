
import axios from "axios";

const URL = "https://backend-fp-geekshubs-production.up.railway.app";

//PETICIONES CON GET

export const allSpots = async () => {
    try {
      let res = await axios.get(`${URL}/spots/`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };


  export const getByName = async (criteria) => {
    try {
      let res = await axios.get(`${URL}/spots/name/${criteria}`);
      return res.data;
    } catch (error) {
    }
  };


  export const getAllUsers = async (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      let res = await axios.get(`${URL}/users/all`, config);
  
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };


  // export const getMySpots = async (token) => {

  //   var config = {
  //     headers: {
  //       Authorization : "Bearer" + token
  //     }
  //   };

  //   return axios.get(axios.get(`${URL}/spots/myspots/`, config))
  // };

  export const getMySpots = async (id) => {
    try {
      let res = await axios.get(`${URL}/spots/myspots/${id}`);
      return res.data;
    } catch (error) {
    }
  };
  
  // export const getMySpots = async () => {
  //   try {
  //     let res = await axios.get(`${URL}/spots/myspots/`);
  //     return res.data;
  //   } catch (error) {
  //   }
  // };
  
  

  //PETICIONES CON POST

  export const newSpot = async (body, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
        spotname: body.spotname,
        city: body.city,
        adress: body.adress,
        type: body.type,
        conditions: body.conditions,
        lifeguard: body.lifeguard,
        length: body.length,
        rating: body.rating,
        imagepath: body.imagepath,
    };
    try {
      let res = await axios.patch(`${URL}/spots/newspots`, bodyParameters, config);
      return res.data.resp;
    } catch (error) {
      console.error(error);
    }
  };

  export const editUser = async (body, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(config)
    console.log("aqui en editUser")
    const bodyParameters = {
      username: body.username,
      email: body.email,
    };
    console.log(bodyParameters)
    console.log("aqui en bodyParameters")

    try {
      let res = await axios.patch(`${URL}/users/edit`, bodyParameters, config);
      return res.data.resp;
      
    } catch (error) {

      console.error(error);
    }
  };


    //PETICIONES CON DELETE
    
