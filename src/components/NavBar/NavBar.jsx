import { UserOutlined, SettingTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { Dropdown } from '../Dropdown/Dropdown';
import { Spacer } from '../Spacer/Spacer';
import { createFromIconfontCN } from '@ant-design/icons';

import './NavBar.css';
import { session } from '../../utils/session';
import { useNavigate } from 'react-router-dom';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export const NavBar = () => {

    const navigate = useNavigate();

    // ITEMS DEL DROPDOWN
    const items = [
        {   // CONFIGURACIÓN
            onClick : () => { if ( session.get()?.token ) navigate('/login') },
            icon: <SettingTwoTone />,
            key: 1
        },
        {   // CERRAR SESIÓN
            onClick : () => { session.del(); window.location.reload() },
            icon: <IconFont type="icon-tuichu"/>,
            key: 2
        }
    ]

    return (

        <div className="main_container" style={ styles.main_container }>

            <div className="nav-section">

                <Button
                    className='nav-btn'
                    style={ styles.button_style }
                    type="primary"
                >
                    Home
                </Button>

                <Button
                    className='nav-btn'
                    style={ styles.button_style }
                    type="primary"
                >
                    About us
                </Button>

            </div>

            <Spacer orientation="horizontal" space={ 10 }/>

            <div className="nav-section">

                <Dropdown items={ items }/>

            </div>

        </div>

    )

}

const styles = {

    button_style : {

        borderRadius: 15,
        paddingLeft: 25,
        paddingRight: 25,
        marginLeft: 5,
        marginRight: 5,

        justifyContent: 'space-between',

        color: 'blue',
        backgroundColor: 'rgba( 0, 0, 0, 0)',

    },

    main_container : {

        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,

    },

}