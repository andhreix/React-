import React from "react";
import "../assets/styles/components/Caroussel.scss";
const Caroussel = ({ children }) => {
  return (
    <section className="carousel">
      <div className="carousel__container">{children}</div>
    </section>
  );
};

export default Caroussel;
