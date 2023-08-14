import { EtiquetasGenerales_ES } from "./Genericos/EtiquetasGenerales_ES";

const EtiquetasModulo = {
    NotFound: {
        Et_TituloPrincipal: 'Oops!',
        Et_SubTitulo: '404 Página no encontrada',
        Et_Descripcion: 'Es posible que la página que está buscando haya sido eliminada debido a un cambio de nombre o no esté disponible temporalmente.'
    },
    Footer: {
        Et_TituloPrincipal: 'Copyright © 2023 Innovasof'
    },
    Idioma:{
        Et_Idioma_ES:['Español','Inglés'],
        Et_Idioma_EN:'Inglés'
    },
    Header:{
        Et_TituloPrincipal:'Administración',
        Et_SubTitulo:'Universidad Académica'
    },
    Inicio:{
        Et_InicioTitulo:'Administración de contenido Krud',
        Et_campo_uno:'Título',
        Et_campo_dos:'Detalle',
        Et_campo_tres:'Grupo',
        Et_campo_cuatro:'Dirigido',
        Et_campo_cinco:'Vence',
        Et_campo_seis:'Creador',
        Et_campo_siete:'Acciones',
        Et_contenido:'Contenidos',
        Et_encuesta:'Encuestas',
        Et_pregunta:'Pregunta',
        Et_respuestas:'Respuestas',
        Et_status:'Activación'
    },
    Modal:{
        Et_titulo:'Mantenimiento de contenido',
        Et_titulo_field:'Título',
        Et_titulo_encuesta:'Mantenimiento de encuesta',
        Et_Descripcion:'Descripción',
        Et_Group:'Grupo',
        Et_Departamentos:'Departamentos',
        Et_Estudiantes:'Carreras Estudiantes',
        Et_Profesores:'Carreras Profesores',
        Et_Vence:'Vence',
        Et_pregunta:'Pregunta'
       },
    Mensajes:{
        Et_creado:'Registro creado correctamente.',
        Et_actualizado:'Registro actualizado correctamente.',
        Et_eliminado:'Registro eliminado correctamente.',
        Et_eliminados:'Registros eliminados correctamente.',
        Et_eliminar_titulo:'Se eliminará el registro de forma permanente',
        Et_eliminar_titulos:'Se eliminarán los registros de forma permanente',
        Et_no_eliminar:'NO, MANTENER EL REGISTRO',
        Et_no_eliminars:'NO, MANTENER LOS REGISTROS',
        Et_si_eliminar:'SÍ, ELIMINAR EL REGISTRO',
        Et_si_eliminars:'SÍ, ELIMINAR LOS REGISTROS',
        Et_ask_delete:'¿Desea eliminar el registro ',
        Et_ask_deletes:'¿Desea eliminar los registros ',
        Et_obligatorio:'El campo es obligatorio',
        Et_quitar:'Quitar opción',
        Et_anadir:'Añadir opción',
        Et_opcion:'Opción',

    }  
};

const EtiquetasUnificadas = { ...EtiquetasGenerales_ES, ...EtiquetasModulo };

const Etiquetas_Es = {
    Idioma: "ES",
    Etiquetas: EtiquetasUnificadas,
};

export default Etiquetas_Es;