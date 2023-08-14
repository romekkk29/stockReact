import DiccionarioEtiquetas from '../../Configuracion/Idiomas/Etiquetas_Diccionario';
// 1 ) Objeto que se va guardar en el contexto 
const initialState = {
        CodigoIdioma:DiccionarioEtiquetas.CodIdiomaDefault,
        Idioma: DiccionarioEtiquetas.IdiomaDefault.Idioma,
        Etiquetas :DiccionarioEtiquetas.IdiomaDefault.Etiquetas
};

// 2 ) Logica de manejo de la variable 
const etiquetasIdiomaReducer =  (state = initialState, action) =>{
switch (action.type) {
    case "ASIGNA_IDIOMA":
        return{
            ...state,
            CodigoIdioma :action.etiquetasIdioma.CodigoIdioma,
            Idioma : action.etiquetasIdioma.Idioma,
            Etiquetas:action.etiquetasIdioma.Etiquetas
        }
    default : return state; 
}
}; 

//3 se exporta el comporamiento que administra la variable pra poder usarse 
export default etiquetasIdiomaReducer;