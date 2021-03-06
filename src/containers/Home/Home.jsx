import { Button, Divider, Typography } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Spacer } from '../../components/Spacer/Spacer';
import './Home.css';

const { Title } = Typography;

export const Home = () => {

    const navigate = useNavigate();

    return (

        <div className="home_main_container">

            <Spacer orientation={ "vertical" } space={ 150 } />
            <Title level={2}> HOME </Title>
            <Spacer orientation={ "vertical" } space={ 100 } />

            <Card 
                title={ "Streaming" } 
                body={ "Aqui podrás hacer stream de las series que quieras desde tu pc :)" } 
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

            <Card orientation={ "vertical" } title={ "TITULO" } body={ "PRUEBA DE TEXTO" } footer={ "FOOTER" }/>

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
