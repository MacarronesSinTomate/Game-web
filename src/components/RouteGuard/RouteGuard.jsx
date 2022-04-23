import React from 'react'
import { Login } from '../../containers/Login/Login';
import { NavBar } from '../NavBar/NavBar';

const Loading = () => {

	return (
		<div>
			<p> LOADING </p>
		</div>
	);

}

const NotFound = () => {

	return (
		<div>
			<p> NOT FOUND </p>
		</div>
	);

}

export const RouteGuard = () => {

    const Switch = () => {

        switch ( window.location.pathname ) {

            case '/':
                return <Login />
                break;

            case '/asd':
                return <NotFound />
                break;

            default:
                return <Loading />
                break;

        }

    }
        
    return (
        
        <>
            <NavBar />
            { Switch() }        
        </>

    )

};
