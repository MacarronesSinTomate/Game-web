import { Divider, Space, Typography } from 'antd';
import React from 'react'
import { Spacer } from '../../components/Spacer/Spacer';
import './Home.css';

const { Title } = Typography;

export const Home = () => {

    return (

        <div className="home_main_container">

            <Spacer orientation={ "vertical" } space={ 100 } />

            <Title level={2}> HOME </Title>

            <Card title={ "TITULO" } body={ "PRUEBA DE TEXTO" } footer={ "FOOTER" }/>

            <Spacer orientation={ "vertical" } space={ 50 } />

            <Card orientation={ "vertical" } title={ "TITULO" } body={ "PRUEBA DE TEXTO" } footer={ "FOOTER" }/>

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
