import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">About us</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            We are company About public information
          </h2>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Go Home page
          </Link>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Planets</h4>
              <p className="text-body-secondary">
                This is a general information about Planets
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">People</h4>
              <p className="text-body-secondary">
                here you can see about people which work our company
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Vehicles </h4>
              <p className="text-body-secondary">
                here you can see our company cars and also you can buy it
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">About Us</h4>
              <p className="text-body-secondary">
                here you can see About Us and our company Which are informations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
