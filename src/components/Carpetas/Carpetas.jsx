import { Button } from 'antd';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCarpetas } from '../../hooks/useCarpetas';

export const Carpetas = ({
    carpetas,
    getCarpetas
}) => {


    const switchFormat = ( fileName ) => {

        if ( fileName.includes( ".txt" ) )  return "📄 " + fileName;
        if ( fileName.includes( ".mp3" ) )  return "🎵 " + fileName;
        if ( fileName.includes( ".mp4" ) )  return "📽️ " + fileName;
        if ( fileName.includes( ".mpeg" ) ) return "📽️ " + fileName;
        if ( fileName.includes( ".avi" ) )  return "📽️ " + fileName;

        return "📂 " + fileName;

    }
    
    return (

        <div>
            {
                carpetas 
                &&
                carpetas.map( ( _carpeta ) => {

                    return (

                        <Button
                            style={ styles.button }
                            onClick={ () => { getCarpetas( "/" + _carpeta.name ); } }
                            type='primary'
                        >
                            { switchFormat( _carpeta.name ) }  
                        </Button>

                    )

                })
            }
        </div>

    )

}

const styles = {

    button : {

        margin : 10,
        borderRadius: 10,

    }
 
}