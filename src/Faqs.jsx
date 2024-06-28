import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Faqs() {
  const [infos, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((res) => res.json())
      .then((data) => setInfo(data.results));
  }, []);

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center mt-5">
      {infos.map((info, pops) => {
        return (
          <div
            key={pops}
            className="card text-center mb-3"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Name: {info.name}</h5>
              <p className="card-text">Model: {info.model} </p>
              <p className="card-text">Manufacturer: {info.manufacturer} </p>
              <p className="card-text">
                Cost in credits: {info.cost_in_credits}{" "}
              </p>
              <Link
                to={`/FAQs/${info.url.split("/")[5]}`}
                className="btn btn-primary"
              >
                See more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
