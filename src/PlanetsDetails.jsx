import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PlanetsDetails = () => {
  const [planets, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="card">
      <h5 className="card-header"> name : {planets.name}</h5>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">terrain: {planets.terrain}</p>
        <p className="card-text"> surface_water: {planets.surface_water} </p>
        <p className="card-text">population : {planets.population}</p>
        <Link to="/planets" className="btn btn-primary">
          Go back
        </Link>
      </div>
    </div>
  );
};
export default PlanetsDetails;
