import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
    state = {
    services: [
        {
            icon: < FaCocktail />,
            title: "Free Cocktails",
            info: 'loremVelit ad in consequat velit occaecat incididunt voluptate ipsum sunt veniam qui duis labore.'
        }, 
        {
            icon: < FaHiking /> ,
            title: "Free Hiking",
            info: 'loremVelit ad in consequat velit occaecat incididunt voluptate ipsum sunt veniam qui duis labore.'
        },
        {
            icon: < FaShuttleVan /> ,
            title: "Free Shuttle Van",
            info: 'loremVelit ad in consequat velit occaecat incididunt voluptate ipsum sunt veniam qui duis labore. '
        }, 
        {
            icon: < FaBeer /> ,
            title: "Free Beer",
            info: 'loremVelit ad in consequat velit occaecat incididunt voluptate ipsum sunt veniam qui duis labore. '
        }]
    };
    render() {
        return (
            <section className="services">
                <Title title = "Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        }
                    )}
                </div>
            </section>
        );
    }
}
