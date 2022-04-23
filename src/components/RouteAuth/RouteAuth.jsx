import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../utils/apiRequest';
import { session } from '../../utils/session';
import { NavBar } from '../NavBar/NavBar';

export const RouteAuth = ( { children, auth } ) => {
    
    const navigate = useNavigate();

    // ESTE useEffect COMPRUEBA QUE EL TOKEN ES CORRECTO
    useEffect(() => {

        // COMPROBAMOS SI HAY SESIÓN INICIADA
        if ( session.get()?.token ) {

            const sessionData = {
                ...session.get()
            }
            session.set(sessionData);
        } 
 
        // COMPROBAMOS LA VALIDEZ DEL TOKEN DE LA SESIÓN
        if ( auth ) checkJWT();

    }, [])
    
    const checkJWT = async () => {

        try {

            const { token } = session.get();
            const check_validation_token = await apiRequest( 'get', '/verifyToken', { token }, true );

            // Comprobamos respuesta
            if ( !check_validation_token.authorization ) navigate( '/login' );

        } catch ( err ) {

            navigate( '/login' );

        }

    }

    return (
        <>
            <NavBar/>
            { children }
        </>
    );

}