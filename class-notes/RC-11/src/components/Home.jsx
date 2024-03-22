import React from 'react';
import HeaderS, { LinkS } from './style/HeaderStyle';
import DivS from './style/ContainerStyle';
import ButtonS, { TomatoButtonS } from './style/ButonStyle';

const Home = () => {
    return (
        <DivS>
            <HeaderS>STYLED COMPONENTS</HeaderS>
            <LinkS href="#">LINK</LinkS>
            <ButtonS esra>TIKLA1</ButtonS>
            <ButtonS elif>TIKLA2</ButtonS>
            <ButtonS>TIKLA3</ButtonS>
            <TomatoButtonS>TIKLA4</TomatoButtonS>
            <TomatoButtonS yeter>TIKLA5</TomatoButtonS>
        </DivS>
    );
}

export default Home;
