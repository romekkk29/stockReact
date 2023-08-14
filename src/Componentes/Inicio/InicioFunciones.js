

//Actions
import { getStock,getMovimiento,postMovimiento } from '../../Actions/inicioActions';




export const obtenertStock = async (setListaRegistros,setLoading) => {
    
    await getStock().then(res => {
        setLoading(false)
        if (res) {
            setListaRegistros(res.data); return; 
            }
        setListaRegistros([]);
    });
};

export const obtenertMovimiento = async (setListaEncuestas,setLoading) => {
    
    await getMovimiento().then(res => {
        setLoading(false)
        if (res) {
            
            setListaEncuestas(res.data); return; 
            }
        setListaEncuestas([]);
    });
};




export const crearEncuestaNueva = async (object,setListaEncuestas,setListaRegistros,setLoading) => {
    let id='0'
    if(object.nombre=='Apple iPhone 13'){
        id='64d1b2648ad680e1682726d0'
    }else if(object.nombre=='Samsung Galaxy S22'){
        id='64d1b2648ad680e1682726d0'
    }else if(object.nombre=='Google Pixel 6'){
        id='64d1b2648ad680e1682726d0'
    }else if(object.nombre=='Apple iPad Pro'){
        id='64d1bcb08ad680e1682726d3'
    }else if(object.nombre=='Amazon Echo Dot'){
        id='64d1bcff8ad680e1682726d4'
    }
    const objectPost={
        nombre: object.nombre,
        tipo:object.tipo,
        cantidad:object.cantidad,
        id:id
    }
    return await postMovimiento(objectPost).then(res => {
        if (res) { 
            obtenertMovimiento(setListaEncuestas,setLoading)
            obtenertStock(setListaRegistros,setLoading)
            return true; }
        else{
            setLoading(false)
            return false;

        }
    });
};
