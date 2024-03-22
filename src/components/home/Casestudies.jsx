import React from "react";
import "../styles/casestudies.css";
import case1 from "../../assets/images/case-1.webp";
import case2 from "../../assets/images/case-2.webp";
import case3 from "../../assets/images/case-3.webp";
import case4 from "../../assets/images/case-4.webp";

function Casestudies() {
  return (
    <section className="case-case">
      <div className="casestudies">
        <div className="subtitle secondary">
          <h4 className="case-sub-h4">
            <span>Our Case Studies -</span>
          </h4>
        </div>
        <div className="case">
          <h2 className="case-left primary">
            We've Excelled in Impressive Projects.
          </h2>
          <p className="case-right">
            With vast cross-disciplinary experience, we deliver user-friendly
            solutions. Our expertise includes responsive IT solutions and global
            graphic design services.
          </p>
        </div>
        <div className="cards">
          <a href="https://yarlsfo.org/" target="_blank">
            {" "}
            <img className="case-images" src={case1} alt="" width={250} />
          </a>
          <a href="https://yarlsfo.org/hackforce23/" target="_blank">
            {" "}
            <img className="case-images" src={case2} alt="" width={250} />
          </a>
          <a href="https://yarlsfo.org/" target="_blank">
            {" "}
            <img className="case-images" src={case3} alt="" width={250} />
          </a>
          <a href="https://yarlsfo.org/hackforce23/" target="_blank">
            {" "}
            <img className="case-images" src={case4} alt="" width={250} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Casestudies;
