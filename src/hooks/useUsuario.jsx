import axios from 'axios';
import React, { useState } from 'react'
import { apiRequest } from '../utils/apiRequest';

export const useUsuario = () => {

    const [ usuario, setUsuario ] = useState( null );

    const login = async ( _usuario, _password ) => {

        const body = {
            username: _usuario,
            password: _password
        }
        const check_login = await apiRequest( "post", "/login", body );

        if ( check_login.error ) return false;
        
        setUsuario( check_login.usuario );
        return true;

    }
    const deleteUser = async () => {

        

    }
    const modifierUser = async ( newUser ) => {



    }

    return {
        usuario,
        login,
        deleteUser,
        modifierUser
    };

}
