import axios from 'axios';

const base_url = 'https://rickandmortyapi.com/api';
const endpoints = ['character', 'location', 'episode'];

const ApiInstance = axios.create({
    baseURL: base_url
});

export const getData = async(instance = '', page = 1) => {
    try{
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
    }catch(e){
        console.log('Server Error; ', e);
        throw new Error('Server Error');
    }
}

export const getOneData = async(instance = '', id = null) => {

    try{
        if(instance == '' || !id) return;
        
        let endpoint;
        
        const isEndpoint = endpoints.includes(instance);
        
        if (isEndpoint) {
            endpoint = instance;
        }else{
            return;
        }
        
        if( !isNaN(id) && id >= 1){
            endpoint = `${endpoint}/${id}`;
        }else{
            return;
        }
        
        const { data } = await ApiInstance.get(`/${endpoint}`);
        return data;
    }catch(e){
        console.log('Server Error:', e);
        throw new Error('Server Error');
    }
}