const TxtProblemasObtener = 'There were problems getting';
const TxtProblemas = 'There were problems';

export const MensajesGenericos_EN = [
    {
        'codigo': 'insertOk',
        'titulo': 'Successful',
        'severidad': 'success',
        'mensaje': 'Record correctly created.'
    },
    {
        'codigo': 'updateOk',
        'titulo': 'Successful',
        'severidad': 'success',
        'mensaje': 'Record correctly updated.'
    },
    {
        'codigo': 'deleteOk',
        'titulo': 'Successful',
        'severidad': 'success',
        'mensaje': 'Record correctly deleted.'
    },
    {
        'codigo': 'publishOk',
        'titulo': 'Successful',
        'severidad': 'success',
        'mensaje': 'Record published successfully.'
    },
    {
        'codigo': 'unpublishOk',
        'titulo': 'Successful',
        'severidad': 'success',
        'mensaje': 'Record unpublished successfully.'
    },
    {
        'codigo': 'publishCancel',
        'titulo': 'Message',
        'severidad': 'info',
        'mensaje': 'Publish canceled'
    },
    {
        'codigo': 'unpublishCancel',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Unpublish canceled'
    },
    {
        'codigo': 'deleteCancel',
        'titulo': 'Message',
        'severidad': 'info',
        'mensaje': 'Delete canceled'
    },
    {
        'codigo': 'deleteOkMultiples',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Records deleted successfully.'
    },
    {
        'codigo': 'publishOkMultiples',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Records published successfully.'
    },
    {
        'codigo': 'unpublishOkMultiples',
        'titulo': 'Exitoso',
        'severidad': 'success',
        'mensaje': 'Records Unpublished successfully.'
    },
    {
        'codigo': 'publishCancelMultiples',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Canceled posts'
    },
    {
        'codigo': 'unpublishCancelMultiples',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Unpublished canceled'
    },
    {
        'codigo': 'deleteCancelMultiples',
        'titulo': 'Mensaje',
        'severidad': 'info',
        'mensaje': 'Eliminations canceled'
    },
    {
        'codigo': 'InternalServerError',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'performing the action, please contact the system administrator.'
    },
    {
        'codigo': 'Unauthorized',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Incorrect credentials.'
    },
    {
        'codigo': 'ErrorEmailLongitud',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'The email must not have more than 200 characters.'
    },
    {
        'codigo': 'ErrorEmailVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'The mail cannot be empty.'
    },
    {
        'codigo': 'ErrorContrasenaVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'The password cannot be empty.'
    },
    {
        'codigo': 'ErrorUndefined',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Unidentified error, contact the administrator.'
    },
    {
        'codigo': 'ErrorUserUnauthorized',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'The user is not authorized, check your credentials.'
    },
    //CombosGenericos_DRP
    {
        'codigo': 'ErrorGetListProjects',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'the projects list.'
    },
    {
        'codigo': 'ErrorGetListModuleByProyectId',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'the modules list.'
    },
    {
        'codigo': 'ErrorGetListItemModuleBySemModuleId',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'the menus list.'
    },
    {
        'codigo': 'ErrorGetListSubItemModuleBySeiItemModuleId',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'the options list.'
    },
   //FinCombosGenericos_DRP
    //Cursos_DRP
    {
        'codigo': 'ErrorGetListCourses',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'the courses list.'
    },
    {
        'codigo': 'ErrorGetCourseById',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemasObtener + 'the course.'
    },
    {
        'codigo': 'ErrorDeleteCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'deleting the course.'
    },
    {
        'codigo': 'ErrorCreateCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'creating the course.'
    },
    {
        'codigo': 'ErrorUpdateCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'updating the course.'
    },
    {
        'codigo': 'ErrorPublishCourse',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'publishing the course.'
    },
    {
        'codigo': 'ErrorValidarCurriculumCurso',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'validating the course. There is a course with that name.'
    },
    {
        'codigo': 'ErrorPublishCourses',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'publishing or unpublishing the courses.'
    },
    {
        'codigo': 'ErrorDeleteCourses',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'deleting the courses.'
    },
   //FinCursos_DRP
    //Registro_BL
    {
        'codigo': 'ErrorUserNotCreated',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'creating user.'
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
        'mensaje': TxtProblemas + 'uploading the file to the server (write permissions), please contact your system administrator.'
    },
    {
        'codigo': 'ErrorFile409',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'A file with the same name already exists on the server.'
    },
    {
        'codigo': 'ErrorDeletingFiles',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': TxtProblemas + 'deleting files from server.'
    },
    //fin mensajes manejo archivos
    //ValidadoresFluent
    {
        'codigo': 'ErrorCouNameNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Course name required.'
    },
    {
        'codigo': 'ErrorCouDscNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Course description required.'
    },
    {
        'codigo': 'ErrorCouItemModuleIdFkNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Menu identifier required.'
    },
    {
        'codigo': 'ErrorCoursesContentNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Content required.'
    },
    {
        'codigo': 'ErrorConDscNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Content description required.'
    },
    {
        'codigo': 'ErrorConNameNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Content name required.'
    },
    {
        'codigo': 'ErrorIdNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Identifier required.'
    },
    {
        'codigo': 'ErrorLanguageNotEmty',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Language required.'
    },
    {
        'codigo': 'ErrorEmailVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Email required.'
    },
    {
        'codigo': 'ErrorEmailLongitud',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Email must not exceed 256 characters.'
    },
    {
        'codigo': 'ErrorContrasenaVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Password required.'
    },
    {
        'codigo': 'ErrorContrasenaLongitud',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Password must not exceed 20 characters.'
    },
    {
        'codigo': 'ErrorUsernameVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Username required.'
    },
    {
        'codigo': 'ErrorAgeVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'Age required.'
    },
    {
        'codigo': 'ErrorFullNameVacio',
        'titulo': 'Error',
        'severidad': 'error',
        'mensaje': 'FullName required.'
    },
    //FinValidadoresFluent
]