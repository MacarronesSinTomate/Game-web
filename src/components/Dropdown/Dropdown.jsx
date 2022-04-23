import { Button } from 'antd'
import React, { useState } from 'react'
import { UserOutlined, SettingTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';

import './Dropdown.css';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export const Dropdown = ({ items }) => {

    const [ desplegar, setDesplegar ] = useState( false );

    const opciones = () => {

        return (

            <div className='options'>

                {

                    items.map( ( _item ) => {

                        const onClick = _item.onClick || ( () => { console.log( "Doesn't work" ) });
                        const icon = _item.icon       || <CloseCircleTwoTone />;
                        
                        return (
                            <Button
                                className='nav-btn'
                                style={ styles.option_style }
                                type="primary"
                                onClick={ () => onClick() } 
                                key={ _item.key }
                            >
                                { icon }
                            </Button>
                        );

                    })

                }

            </div>

        );

        return (

            <div className="options">

                <Button
                    className='nav-btn'
                    style={ styles.option_style }
                    type="primary"
                >
                    <SettingTwoTone />
                </Button>

                <Button
                    className='nav-btn'
                    style={ styles.option_style }
                    type="primary"
                >
                    <IconFont type="icon-tuichu" />
                </Button>
            
            </div>

        );

    }

    return (

        <div className="drop">

            <Button
                className='nav-btn'
                style={ styles.button_style }
                type="primary"
                onClick={ () => setDesplegar( !desplegar ) }
            >
                <UserOutlined />
            </Button>

            { 
                desplegar 
                &&
                opciones()
            }

        </div>

    )

}

const styles = {

    button_style : {

        borderRadius: 100,
        marginLeft: 5,
        marginRight: 5,

        color: 'blue',
        backgroundColor: 'rgba( 0, 0, 0, 0)',

    },

    option_style : {

        borderRadius: 100,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,

        color: 'blue',
        backgroundColor: 'rgba( 0, 0, 0, 0)',

    }

}
