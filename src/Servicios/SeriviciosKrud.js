//Configuraciones
import { UrlBackKrud } from '../Configuracion/Llaves/RepositorioConfig'

import axios from 'axios';

const servicio = axios.create();

servicio.CancelToken = axios.CancelToken;
servicio.isCancel = axios.isCancel;

servicio.defaults.baseURL = UrlBackKrud;

const puntosAccesoKrud = {
    get: (url,headers) => servicio.get(url,{headers}),
    post: (url, body,headers) => servicio.post(url,body,{headers})
    
};

export default puntosAccesoKrud;








