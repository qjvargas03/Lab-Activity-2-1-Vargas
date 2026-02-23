import React from "react";
import offerImg from "../assets/offer.jpg";

export default function Home() {
  return (
    <>
      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Tanghalang Aranzazu</h1>
          <p className="hero-subtitle">
            A Church-Based Community Theater Organization in San Mateo, Rizal
          </p>
        </div>
      </section>

      
      <main className="container">
        <div className="offer-section">
          <h2 className="offer-title">what we offer.</h2>

          <div className="offer-layout">
            
            <div className="offer-image">
              <img src={offerImg} alt="Tanghalang Aranzazu Activities" />
            </div>

            
            <div className="offer-text">
              <div className="offer-item">
                <h3>Stage Productions</h3>
                <p>
                  We produce community and church-based theater plays that promote
                  evangelization and Christian values through creative storytelling.
                </p>
              </div>

              <div className="offer-item">
                <h3>Acting Workshops (TASchooling)</h3>
                <p>
                  We conduct skills formation programs that focus on acting, directing,
                  scriptwriting, stage management, and technical theater development.
                </p>
              </div>

              <div className="offer-item">
                <h3>Church Productions</h3>
                <p>
                  Faith-centered performances such as <i>Senakulo</i> and
                  <i> Panunuluyan</i> that serve the parish and wider community.
                </p>
              </div>

              <div className="offer-item">
                <h3>Community & Spiritual Gatherings</h3>
                <p>
                  Fellowship activities, liturgical celebrations, outreach programs,
                  and formation sessions that strengthen unity, spirituality,
                  and service among members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}