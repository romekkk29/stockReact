import axios from 'axios';
import { UrlBackKrud } from '../Configuracion/Llaves/RepositorioConfig'

const service = axios.create();

service.CancelToken = axios.CancelToken;
service.isCancel = axios.isCancel;

service.defaults.baseURL = UrlBackKrud;


service.interceptors.request.use((parameters) => {
    return parameters;
}, err => { return Promise.reject(err); });

const publicAccesPoint = {
    get: (url) => service.get(url),
    post: (url, body) => service.post(url, body)
};

export default publicAccesPoint;