import { MensajesGenericos_EN } from './Genericos/DiccionarioMensajesGenericos_EN';

const Diccionario_EN = [
    {
        'codigo': 'confirmPublish',
        'titulo': 'Warning',
        'severidad': 'warning',
        'mensaje': '¿Are you sure you want to publish the course: "{0}"?'
    },
    {
        'codigo': 'confirmUnpublish',
        'titulo': 'Warning',
        'severidad': 'warning',
        'mensaje': '¿Are you sure you want to unpublish the course: "{0}"?'
    },
    {
        'codigo': 'confirmDelete',
        'titulo': 'Warning',
        'severidad': 'warning',
        'mensaje': '¿Are you sure you want to delete the course: "{0}"?'
    },
    {
        'codigo': 'confirmDeleteMultiples',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': 'Are you sure you want to delete the selected courses?'
    },
    {
        'codigo': 'confirmPublishMultiples',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': 'Are you sure you want to publish the selected courses?'
    },
    {
        'codigo': 'confirmUnpublishMultiples',
        'titulo': 'Advertencia',
        'severidad': 'warning',
        'mensaje': 'Are you sure you want to unpublish the selected courses?'
    },
    {
        'codigo': 'confirmValidFormat',
        'titulo': 'Information',
        'severidad': 'info',
        'mensaje': 'The file "{0}" does not have the accepted format.'
    },
    {
        'codigo': 'errorDragOneElement',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Only one element is allowed to be dragged.'
    },
    {
        'codigo': 'errorInfoNotPresente',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Debe introducir el nombre y el tooltip del fichero.'
    },
];

export const DiccionarioMensajes_EN = [...MensajesGenericos_EN, ...Diccionario_EN];