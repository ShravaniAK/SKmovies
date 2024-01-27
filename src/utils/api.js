import axios from 'axios';

const BASE_URL='https://api.themoviedb.org/3';

const headers={
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzhmN2MyYjlmMmIzNjFjYWU3YmQ4YTYwMTZlNTY2NyIsInN1YiI6IjY1YjM5ZjdmYjMzMTZiMDE0YWEwYmVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eKRbPPjM7f3OC29j1ol0pcIHP1ZfgXcpwD5cPvz4lK4'
};

export const fetchDataFromAPI =async (url,params)=>{
try {
    const {data}=await axios.get(BASE_URL+url,{
       headers,
       params
    })
    return data;
} catch (error) {
    console.log(error);
    return error;
}
}