import { EtiquetasGenerales_EN } from './Genericos/EtiquetasGenerales_EN';

const EtiquetasModulo = {
    NotFound: {
        Et_TituloPrincipal: 'Oops!',
        Et_SubTitulo: '404 Page not found',
        Et_Descripcion: 'The page you are looking for may have been deleted due to a name change or is temporarily unavailable.'
    },
    Footer: {
        Et_TituloPrincipal: 'Copyright � 2023 Innovasof'
    },
    Idioma:{
        Et_Idioma_ES:['Spanish','English'],
        Et_Idioma_EN:'English'
    },
    Header:{
        Et_TituloPrincipal:'Administration',
        Et_SubTitulo:'Academic University'
    },
    Inicio:{
        Et_InicioTitulo:'Krud Content Management',
        Et_campo_uno:'Title',
        Et_campo_dos:'Detail',
        Et_campo_tres:'Group',
        Et_campo_cuatro:'Addressed',
        Et_campo_cinco:'Expires',
        Et_campo_seis:'Creator',
        Et_campo_siete:'Actions',
        Et_contenido:'Contents',
        Et_encuesta:'Surveys',
        Et_pregunta:'Question',
        Et_respuestas:'Answers',
        Et_status:'Status'
    },
    Modal:{
        Et_titulo:'Content maintenance',
        Et_titulo_encuesta:'Survey Maintenance',
        Et_titulo_field:'Title',
        Et_Descripcion:'Description',
        Et_Group:'Group',
        Et_Departamentos:'Departments',
        Et_Estudiantes:'Student Careers',
        Et_Profesores:'Profesor Careers',
        Et_Vence:'Expires',
        Et_pregunta:'Question'
       },
       Mensajes:{
        Et_creado:'Record correctly created.',
        Et_actualizado:'Record correctly updated.',
        Et_eliminado:'Record correctly deleted.',
        Et_eliminados:'Records deleted successfully.',
        Et_eliminar_titulo:'The record is permanently deleted',
        Et_eliminar_titulos:'The records are permanently deleted',
        Et_no_eliminar:'NO, KEEP RECORD',
        Et_no_eliminars:'NO, KEEP THE RECORDS',
        Et_si_eliminar:'YES, DELETE RECORD',
        Et_si_eliminars:'YES, DELETE THE RECORDS',
        Et_ask_delete:'Do you want to delete the record ',
        Et_ask_deletes:'Do you want to delete the records ',
        Et_obligatorio:'The field is required',
        Et_quitar:'Remove option',
        Et_anadir:'Add option',
        Et_opcion:'Option',

        }
};

const EtiquetasUnificadas = { ...EtiquetasGenerales_EN, ...EtiquetasModulo };

const Etiquetas_En = {
    Idioma: 'EN',
    Etiquetas: EtiquetasUnificadas
};

export default Etiquetas_En;