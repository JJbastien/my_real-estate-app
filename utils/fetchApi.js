import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
   try { const {data} = await axios.get(url, {
     headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPID_API_KEY
  }})
    console.log(data)
    return data
       
   } catch (error) {
       console.log(error)
       
   }
}