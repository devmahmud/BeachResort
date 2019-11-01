import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const services = [
  {
    icon: <FaCocktail />,
    title: "free cocktails",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <FaHiking />,
    title: "endless hiking",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <FaShuttleVan />,
    title: "free shuttle",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <FaBeer />,
    title: "strongest beer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];
function Services() {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, i) => {
          return (
            <article key={i} className="service">
              <span>{service.icon} </span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
