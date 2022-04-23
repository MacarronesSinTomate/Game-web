import React, { useContext, useState } from 'react'
import { Button, Input, Typography, Divider, message, AutoComplete } from 'antd';
import { useUsuario } from '../../hooks/useUsuario';

import './Login.css';

const { Title } = Typography;

export const Login = () => {

    const [ username, setUsername ] = useState( "" );
    const [ password, setPassword ] = useState( "" );

    const { login } = useUsuario();

    const login_handler = async () => {

        const get_login = await login( username, password ); 

        if ( get_login ) {
            message.success('Inicio de sesión correcto!', 2);
        } else {
            message.error('Usuario o contraseña incorrectos', 2);
        }

    }

    return (

        <div className="main-container">

            <div className="card" style={ styles.card }>

                <Title level={3}> Log in </Title>

                <Divider />

                <Input 
                    style={ styles.input }
                    onChange={ ( ev ) => setUsername( ev.target.value ) }
                    placeholder="Usuario"
                />
                <Input 
                    style={ styles.input }
                    onChange={ ( ev ) => setPassword( ev.target.value ) }
                    placeholder="Contraseña"
                />

                <Button
                    style={ styles.button }
                    onClick={ () => { login_handler() } }
                    type="primary"
                >
                    Iniciar sesión
                </Button>

            </div>

            <div className="card" style={ styles.card }>
                
                <Title level={3}> About us </Title>

                <Divider />

            </div>

        </div>

    )

}

const styles = {

    card : {

        maxWidth: 400,
        maxHeigth: 600,

        minWidth: 400,
        minHeigth: 600,

        borderRadius: 10,
        padding: 20,

    },

    input : {

        marginTop : 10,
        marginBottom : 10,

        borderRadius: 10,

    },

    button : {

        width: '100%',
        marginTop : 20,
        marginBottom : 20,
        borderRadius: 5,

        borderRadius: 10,

    }
 
}
