import { toastr } from 'react-redux-toastr';
import { format } from 'react-string-format';
import { DiccionarioMensajes_ES } from '../Configuracion/Idiomas/DiccionarioMensajes_ES';
import { DiccionarioMensajes_EN } from '../Configuracion/Idiomas/DiccionarioMensajes_EN';

const obtenerMensajeIdiomaCodigo = (indicaIdioma, codigo) => {
    //const selectedIdioma = window.localStorage.getItem("etiqueta_idioma");
    let respuestaMensaje = '';
    switch (indicaIdioma) {
        case "EN":
            respuestaMensaje = DiccionarioMensajes_EN.find(objMensaje => objMensaje.codigo === codigo);
            break;
        case "ES":
            respuestaMensaje = DiccionarioMensajes_ES.find(objMensaje => objMensaje.codigo === codigo);
            break;
        case "DEFAULT":
            respuestaMensaje = DiccionarioMensajes_ES.find(objMensaje => objMensaje.codigo === codigo);
            break;
        default:
            respuestaMensaje = DiccionarioMensajes_ES.find(objMensaje => objMensaje.codigo === codigo);
    }

    if (respuestaMensaje === undefined || respuestaMensaje === null || respuestaMensaje === '') {
        respuestaMensaje = {
            'codigo': '',
            'titulo': '',
            'severidad': '',
            'mensaje': codigo
        };
    } else {
        try {
            const mensajeRespuesta = respuestaMensaje.mensaje;
            const termina = mensajeRespuesta.slice(-1);

            const caracteres = '.,?!';

            if (caracteres.includes(termina) === false) {
                respuestaMensaje = {
                    'codigo': codigo,
                    'severidad': respuestaMensaje.severidad,
                    'titulo': respuestaMensaje.titulo,
                    'mensaje': mensajeRespuesta + '.'
                };
            }
        } catch (ee) { }
    }

    return respuestaMensaje;
}

const enlistaArrayCodigosMensajesIdiomas = (dataErrores) => {
    const listErroresArrays = Object.keys(dataErrores);
    const dataArraysErrores = dataErrores;

    let arrayErrores = [];
    let clave = '';

    for (var i = 0; i < listErroresArrays.length; i++) {
        clave = listErroresArrays[i];
        let tem = dataArraysErrores[clave];

        for (var x = 0; x < tem.length; x++) {
            arrayErrores = [...arrayErrores, tem[x]];
        }
    }
    return arrayErrores;
}

export const message = (codigo, langCode = 'ES', formatInfo = false, formatValue = '') => {
    const messageInfo = obtenerMensajeIdiomaCodigo(langCode, codigo)
    if (formatInfo) {
        messageInfo.mensaje = format(messageInfo.mensaje, formatValue);
    }
    return messageInfo;
}

export const errorMessage = (listadoMensajes, langCode = 'ES', formatInfo = false, formatValue = '') => {
    listadoMensajes.forEach(function (codigo) {
        const mensajeInfo = obtenerMensajeIdiomaCodigo(langCode, codigo);
        switch (mensajeInfo.severidad) {
            case "error":
                formatInfo === false
                    ? toastr.error(mensajeInfo.titulo, mensajeInfo.mensaje)
                    : toastr.error(mensajeInfo.titulo, format(mensajeInfo.mensaje, formatValue));
                break;
            case "warning":
                formatInfo === false
                    ? toastr.warning(mensajeInfo.titulo, mensajeInfo.mensaje)
                    : toastr.warning(mensajeInfo.titulo, format(mensajeInfo.mensaje, formatValue));
                break;
            case "info":
                formatInfo === false
                    ? toastr.info(mensajeInfo.titulo, mensajeInfo.mensaje)
                    : toastr.info(mensajeInfo.titulo, format(mensajeInfo.mensaje, formatValue));
                break;
            case "success":
                formatInfo === false
                    ? toastr.success(mensajeInfo.titulo, mensajeInfo.mensaje)
                    : toastr.success(mensajeInfo.titulo, format(mensajeInfo.mensaje, formatValue));
                break;
            case "message":
                formatInfo === false
                    ? toastr.message(mensajeInfo.titulo, mensajeInfo.mensaje)
                    : toastr.message(mensajeInfo.titulo, format(mensajeInfo.mensaje, formatValue));
                break;
            default:
                formatInfo === false
                    ? toastr.error(mensajeInfo.titulo, mensajeInfo.mensaje)
                    : toastr.error(mensajeInfo.titulo, format(mensajeInfo.mensaje, formatValue));
                break;
        }
    });
}

export const errorMessageResponse = (response = { data: { errors: "" }, statusText: "" }, langCode = 'ES') => {
    if (response.data.errors) {
        const arrayErrores = enlistaArrayCodigosMensajesIdiomas(response.data.errors);
        errorMessage(arrayErrores, langCode);
    } else {
        if (response.data.errors === '') {
            errorMessage(['ErrorUndefined'], langCode);
        } else {
            errorMessage([response.statusText], langCode);
        }
    }
};

export default errorMessageResponse