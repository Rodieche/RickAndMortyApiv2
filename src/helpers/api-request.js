import axios from 'axios';

const base_url = 'https://rickandmortyapi.com/api';
const endpoints = ['character', 'location', 'episode'];

const ApiInstance = axios.create({
    baseURL: base_url
});

export const getData = async(instance = '', page = 1) => {

    let endpoint = endpoints[0];

    if(instance){
        const isEndpoint = endpoints.includes(instance);
        (isEndpoint)? endpoint = instance : null;
    }
    if( !isNaN(page) && page > 1){
        endpoint = `${endpoint}?page=${page}`;
    }

    const { data } = await ApiInstance.get(`/${endpoint}`);
    return data;
}