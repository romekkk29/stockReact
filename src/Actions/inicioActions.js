import puntosAccesoKrud from '../Servicios/SeriviciosKrud';
import puntosAccesoLimitless from '../Servicios/ServiciosLimitless'
import publicAccesPoint from '../Servicios/ServiciosPublicos'


export const getStock = () => {
    return new Promise((resolve, reject) => {
        publicAccesPoint.get('/stock').then(response => {
            resolve(response);
        }).catch(error => { resolve(error.response); });
    });
};
export const getMovimiento = () => {
    return new Promise((resolve, reject) => {
        publicAccesPoint.get('/movimiento').then(response => {
            resolve(response);
        }).catch(error => { resolve(error.response); });
    });
};

export const postMovimiento = (objectRequest) => {
    return new Promise((resolve, reject) => {
        publicAccesPoint.post("/createmovimiento", objectRequest).then(response => {
            resolve(response);
        }).catch(error => { resolve(error.response); });
    });
};
