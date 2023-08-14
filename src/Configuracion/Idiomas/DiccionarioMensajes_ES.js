import { MensajesGenericos_ES } from './Genericos/DiccionarioMensajesGenericos_ES';

const Diccionario_ES = [
    {
        'codigo': 'confirmPublish',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': '¿Está seguro de que desea publicar el curso: "{0}"?'
    },
    {
        'codigo': 'confirmUnpublish',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': '¿Está seguro de que desea bajar el curso: "{0}"?'
    },
    {
        'codigo': 'confirmDelete',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': '¿Está seguro de que desea eliminar el curso: "{0}"?'
    },
    {
        'codigo': 'confirmDeleteMultiples',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': '¿Está seguro de que desea eliminar los cursos seleccionados?'
    },
    {
        'codigo': 'confirmPublishMultiples',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': '¿Está seguro de que desea publicar los cursos seleccionados?'
    },
    {
        'codigo': 'confirmUnpublishMultiples',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': '¿Está seguro de que desea bajar los cursos seleccionados?'
    },
    {
        'codigo': 'confirmValidFormat',
        'titulo': 'Información',
        'severidad': 'info',
        'mensaje': 'El archivo "{0}" no es del formato aceptado.'
    },
    {
        'codigo': 'errorDragOneElement',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Sólo se permite arrastrar un elemento.'
    },
    {
        'codigo': 'errorInfoNotPresente',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Debe introducir el nombre y el tooltip del fichero.'
    },
];

export const DiccionarioMensajes_ES = [...MensajesGenericos_ES, ...Diccionario_ES];