import { Button, Divider, Space, Typography } from 'antd';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Carpetas } from '../../components/Carpetas/Carpetas';
import { Spacer } from '../../components/Spacer/Spacer';
import { useCarpetas } from '../../hooks/useCarpetas';
import './Stream.css';

const { Title } = Typography;

export const Stream = () => {

    const navigate = useNavigate();

    const { 
        carpetas, 
        getCarpetas, 
        atras,
        rutaPrincipal
    } = useCarpetas();

    useEffect(() => {
        
        getCarpetas();

    }, []);

    return (

        <div className="home_main_container">

            <Spacer orientation={ "vertical" } space={ 150 } />
            <Title level={2}> STREAM </Title>
            <Spacer orientation={ "vertical" } space={ 100 } />

            <Card 
                title={ 
                    <div style={{ display: 'flex' }}>

                        <Button
                            onClick={ () => { atras() } }
                            type="primary"
                        >
                            Atras
                        </Button>

                        <Title style={{ margin: '0px auto' }} level={4}> CARPETAS </Title>

                    </div>
                } 
                body={ 
                    <>
                        <Title level={5}> Ruta actual: { rutaPrincipal } </Title>
                        <Carpetas carpetas={ carpetas } getCarpetas={ getCarpetas }/>
                    </>
                } 
                footer={ 
                    <Button
                        style={ styles.button }
                        onClick={ () => { navigate("/stream") } }
                        type="primary"
                    >
                        Start Stream 🔴
                    </Button>
                }
            />

            <Spacer orientation={ "vertical" } space={ 50 } />

            <Card 
                title={ "Reproductor" } 
                body={ 
                    <video width="320" height="240" controls>
                        <source src="movie.mp4" type="video/mp4" />
                    </video>
                } 
                footer={ "Esto es piratilla ekisde" }
            />

            <Spacer orientation={ "vertical" } space={ 2000 } />

        </div>
    )

}

const Card = ({ title, body, footer }) => {

    return (

        <div className={ "card home_card" }>
            
            <Title level={2}> { title } </Title>
            
            {
                ( body )
                &&
                <Divider dashed/>
            }

            <Title level={5}> { body } </Title>

            {
                ( footer )
                &&
                <Divider dashed/>
            }

            <Title level={5}> { footer } </Title>

        </div>

    );

}

const styles = {

    button : {

        width: '100%',
        marginTop : 20,
        marginBottom : 20,
        borderRadius: 5,

        borderRadius: 10,

    }
 
}
