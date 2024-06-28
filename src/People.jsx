import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function People() {
  const [peoples, setPeple] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setPeple(data.results));
  }, []);

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center mt-5">
      {peoples.map((people, prop) => {
        return (
          <div key={prop} className="card" style={{ width: "18rem" }}>
            <div className="card-header"> Name: {people.name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">height: {people.height}</li>
              <li className="list-group-item">Mass: {people.mass}</li>
              <li className="list-group-item">
                hair color: {people.hair_color}
              </li>
              <li className="list-group-item">
                skin color: {people.skin_color}
              </li>
              <li className="list-group-item">eye color: {people.eye_color}</li>
              <Link
                to={`/people/${people.url.split("/")[5]}`}
                className="btn btn-outline-primary"
              >
                See More
              </Link>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
