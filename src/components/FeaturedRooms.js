import React, { Component } from 'react';
import  { RoomContext } from '../contex';
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

export default class FeauturedRooms extends Component {
    static contextType = RoomContext;
  render() {
    let {loading,ftRooms:rooms}=this.context;
     rooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
     });
     return (
      <section className="featured-rooms">
          <Title title="Featured Rooms"/>
          <div className="featured-rooms-center">
            {loading?<Loading/>:rooms}
          </div>  
     </section>
     );
  }
}
