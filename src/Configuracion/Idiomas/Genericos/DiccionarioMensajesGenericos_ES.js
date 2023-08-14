const TxtProblemasObtener = 'Se presentaron problemas al obtener ';
const TxtProblemas = 'Se presentaron problemas ';

export const MensajesGenericos_ES = [
    {
        'codigo': 'insertOk',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registro creado correctamente.'
    },
    {
        'codigo': 'updateOk',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registro actualizado correctamente.'
    },
    {
        'codigo': 'deleteOk',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registro eliminado correctamente.'
    },
    {
        'codigo': 'publishOk',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registro publicado correctamente.'
    },
    {
        'codigo': 'unpublishOk',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registro bajado correctamente.'
    },
    {
        'codigo': 'publishCancel',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Publicación cancelada'
    },
    {
        'codigo': 'unpublishCancel',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Bajar publicación cancelada'
    },
    {
        'codigo': 'deleteCancel',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Eliminación cancelada'
    },
    {
        'codigo': 'deleteOkMultiples',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registros eliminados correctamente.'
    },
    {
        'codigo': 'publishOkMultiples',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registros publicados correctamente.'
    },
    {
        'codigo': 'unpublishOkMultiples',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Registros bajados correctamente.'
    },
    {
        'codigo': 'publishCancelMultiples',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Publicaciones canceladas'
    },
    {
        'codigo': 'unpublishCancelMultiples',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Bajar publicaciones cancelada'
    },
    {
        'codigo': 'deleteCancelMultiples',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Eliminaciones canceladas'
    },
    {
        'codigo': 'InternalServerError',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al realizar la acción, por favor comuníquese con el administrador del sistema.'
    },
    {
        'codigo': 'Unauthorized',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Credenciales incorrectos.'
    },
    {
        'codigo': 'ErrorEmailLongitud',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'El correo no debe tener más de 256 caracteres.'
    },
    {
        'codigo': 'ErrorEmailVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'El correo no puede estar vacío.'
    },
    {
        'codigo': 'ErrorContrasenaVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'La contraseña no puede estar vacía.'
    }, 
    {
        'codigo': 'ErrorUndefined',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Error no identificado, contactar con el administrador.'
    },
    {
        'codigo': 'ErrorUserUnauthorized',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'El usuario no se encuentra autorizado, revise sus credenciales.'
    },
    //CombosGenericos_DRP
    {
        'codigo': 'ErrorGetListProjects',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'el listado de proyectos.'
    },
    {
        'codigo': 'ErrorGetListModuleByProyectId',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'el listado de módulos.'
    },
    {
        'codigo': 'ErrorGetListItemModuleBySemModuleId',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'el listado de menús.'
    },
    {
        'codigo': 'ErrorGetListSubItemModuleBySeiItemModuleId',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'el listado de opciones.'
    },
   //FinCombosGenericos_DRP
    //Cursos_DRP
    {
        'codigo': 'ErrorGetListCourses',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'el listado de cursos.'
    },
    {
        'codigo': 'ErrorGetCourseById',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'el curso.'
    },
    {
        'codigo': 'ErrorDeleteCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al eliminar el curso.'
    },
    {
        'codigo': 'ErrorCreateCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al crear el curso.'
    },
    {
        'codigo': 'ErrorUpdateCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al actualizar el curso.'
    },
    {
        'codigo': 'ErrorPublishCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al publicar el curso.'
    },
    {
        'codigo': 'ErrorValidarCurriculumCurso',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al validar el curso. Existe un curso con ese nombre'
    }, 
    {
        'codigo': 'ErrorPublishCourses',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al publicar o bajar los cursos.'
    },
    {
        'codigo': 'ErrorDeleteCourses',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al eliminar los cursos.'
    },
   //FinCursos_DRP
    //Registro_BL
    {
        'codigo': 'ErrorUserNotCreated',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al crear el usuario.'
    },
   //FinRegistro_BL
   //ActualizarCurso_BL
    {
        'codigo': 'ErrorValidatingCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'validating the course.'
    },
   //FinActualizarCurso_BL
    //mensajes manejo archivos
    {
        'codigo': 'ErrorFile401',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al subir el archivo al servidor (permisos de escritura), comuníquese con el administrador del sistema.'
    },
    {
        'codigo': 'ErrorFile409',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Ya existe un archivo en el servidor con ese mismo nombre.'
    },
    {
        'codigo': 'ErrorDeletingFiles',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'al eliminar los ficheros del servidor.'
    },
    //fin mensajes manejo archivos
    //ValidadoresFluent
    {
        'codigo': 'ErrorCouNameNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Nombre del curso requerido.'
    },
    {
        'codigo': 'ErrorCouDscNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Descripción del curso requerida.'
    },
    {
        'codigo': 'ErrorCouItemModuleIdFkNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Identificador del menú requerida.'
    },
    {
        'codigo': 'ErrorCoursesContentNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Contenido requerido.'
    },
    {
        'codigo': 'ErrorConDscNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Descripción del contenido requerida.'
    },
    {
        'codigo': 'ErrorConNameNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Nombre del contenido requerido.'
    },
    {
        'codigo': 'ErrorIdNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Identificador requerido.'
    },
    {
        'codigo': 'ErrorLanguageNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Lenguaje requerido.'
    },
    {
        'codigo': 'ErrorEmailVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Correo electrónico requerido.'
    },
    {
        'codigo': 'ErrorEmailLongitud',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'El correo electrónico no debe exceder 256 caracteres.'
    },
    {
        'codigo': 'ErrorContrasenaVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Contraseña requerida.'
    },
    {
        'codigo': 'ErrorContrasenaLongitud',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'La contraseña no debe exceder 20 caracteres'
    },
    {
        'codigo': 'ErrorUsernameVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Nombre de usuario requerido.'
    },
    {
        'codigo': 'ErrorAgeVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Edad requerida'
    },
    {
        'codigo': 'ErrorFullNameVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Nombre completo requerido.'
    },
    //FinValidadoresFluent
]