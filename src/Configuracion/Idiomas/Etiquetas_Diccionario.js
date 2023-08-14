import   Etiquetas_Es from './Etiquetas_Es';
import   Etiquetas_En from './Etiquetas_En';

const DiccionarioEtiquetas = {
    Idiomas : {
              EN:Etiquetas_En,
              ES:Etiquetas_Es
      }, 
    IdiomaDefault : Etiquetas_Es,
    CodIdiomaDefault : Etiquetas_Es.Idioma
  };
  
  export default DiccionarioEtiquetas;