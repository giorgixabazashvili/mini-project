import React from "react";
import { Link } from "react-router-dom";
import Photo from "./assets/planets.jpg";

export default function Home() {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">best information</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Here you will learn a lot of news about the planets and people and all
          the necessary information that you will ever need. Thank you for
          visiting us. Visit us often
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link to="/about" className="btn btn-primary btn-lg px-4 me-sm-3">
            About Us
          </Link>
          <Link
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            to="/people"
          >
            people
          </Link>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <div className="container px-5">
          <img
            src={Photo}
            className="img-fluid border rounded-3 shadow-lg mb-4 object-fit-cover"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
