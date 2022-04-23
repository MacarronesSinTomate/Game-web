const SESSION_KEY = "sessionData";

/**
 * Permite escribir y recuperar los datos de sesión almacenados en 
 * el localStorage
 */
export const session = {

    get : () => {
        return JSON.parse( localStorage.getItem( SESSION_KEY ) );
    },

    set : ( data ) => {
        localStorage.setItem ( SESSION_KEY , JSON.stringify( data ) );
    },

    del : () => {
        localStorage.removeItem( SESSION_KEY );
    },

}