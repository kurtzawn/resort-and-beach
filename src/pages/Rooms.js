import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomContainer';
const Rooms = () => {
    return (
    <>
    <Hero hero="roomsHero">
    <Banner title="Our Rooms">
        <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
    </Banner>
    </Hero>
    <RoomsContainer/>
    </>
    );
};

export default Rooms;