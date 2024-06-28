import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PeopleDet() {
  const [people, setPeople] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, [id]);

  return (
    <>
      <div className="card text-center">
        <div className="card-header"> Name: {people.name}</div>
        <div className="card-body">
          <h5 className="card-title"> birth year: {people.birth_year}</h5>
          <p className="card-text"> gender: {people.gender}</p>
          <Link to="/people" className="btn btn-primary">
            Back to people page
          </Link>
        </div>
        <div className="card-footer text-body-secondary"> </div>
      </div>
    </>
  );
}
