import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { session } from '../../utils/session';
import { NavBar } from '../NavBar/NavBar';

export const RouteAuth = ( { children, auth } ) => {
    
    const [ authenticated, setAuthenticated] = useState( false );

    const navigate = useNavigate();

    // ESTE useEffect COMPRUEBA QUE EL TOKEN ES CORRECTO
    useEffect(() => {

        // COMPROBAMOS SI HAY SESIÓN INICIADA
        if ( auth ) {

            if ( session.get()?.token ) {
                setAuthenticated( true );
            } else {
                navigate("/");
            }

        } else {

            setAuthenticated( true );

        }

    }, [ auth ])

    return (
        <>
            <NavBar/>
            { authenticated && children }
        </>
    );

}