import { apiRequest } from '../utils/apiRequest';
import { session } from '../utils/session';

export const useUsuario = () => {

    const login = async ( _usuario, _password ) => {

        const body = {
            username: _usuario,
            password: _password
        }
        const req_login = await apiRequest( "post", "/login", body );
        if ( !req_login || req_login.error ) return null;
        
        const { usuario, token } = req_login;

        session.set({ usuario, token });
        window.location = "/asd";

    }   
    const deleteUser = async () => {

        

    }
    const modifierUser = async ( newUser ) => {



    }

    return {
        login,
        deleteUser,
        modifierUser
    };

}
