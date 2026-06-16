import axios from 'axios';

    const api = axios.create({
      baseURL: 'http://255.255.0.0', // No emulador, use 10.0.2.2 em vez de localhost
    });

    export default api;