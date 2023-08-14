export const initialState = {
    usuario: {
        userId: '',
        nombreCompleto: '',
        token: '',
        email: '',
        username: '',
        defaultLanguage: '',
    },
    expiration: '',
    autenticado: false
}

const autenticacionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CERRAR_SESSION":
            return {
                ...state,
                usuario: {
                    userId: '',
                    nombreCompleto: '',
                    token: '',
                    email: '',
                    username: '',
                    defaultLanguage: '',
                },
                expiration: '',
                autenticado: false
            };
        case "ABRIR_SESION":
            return {
                ...state,
                usuario: action.usuario,
                expiration: action.expiration,
                autenticado: action.autenticado
            }
        default:
            return state;
    }
};

export default autenticacionReducer;