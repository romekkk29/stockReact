//Configuraciones
import axios from 'axios';

const servicio = axios.create();

servicio.CancelToken = axios.CancelToken;
servicio.isCancel = axios.isCancel;




const puntosAccesoLimitless = {

    get: (url,headers) => servicio.get(url,{headers}),
    post: (url, body,headers) => servicio.post(url,body,{headers})
};

export default puntosAccesoLimitless;