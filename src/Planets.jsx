import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results));
  }, []);

  return (
    <div className="d-flex flex-wrap gap-5 my-5  justify-content-center">
      {planets.map((planet, index) => {
        return (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> planet name: {planet.name}</li>
              <li className="list-group-item">
                {" "}
                planet rotation-period: {planet.rotation_period}
              </li>
              <li className="list-group-item">
                {" "}
                planet orbital-period: {planet.orbital_period}
              </li>
              <li className="list-group-item">gravity: {planet.gravity}</li>
              <li className="list-group-item">
                <Link
                  to={`/planets/${planet.url.split("/")[5]}`}
                  className="btn btn-outline-primary"
                >
                  See more
                </Link>
              </li>
            </ul>
            <div className="card-footer">climate: {planet.climate}</div>
          </div>
        );
      })}
    </div>
  );
}
