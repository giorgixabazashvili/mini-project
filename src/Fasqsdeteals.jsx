import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Fasqsdeteals() {
  const [detals, setDetal] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/${id}`)
      .then((res) => res.json())
      .then((Data) => setDetal(Data));
  }, [id]);
  console.log(detals);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Name: {detals.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              length: {detals.length}
            </h6>
            <p className="card-text">consumables: {detals.consumables}</p>
            <p href="#" className="card-link">
              max atmosphering speed: {detals.max_atmosphering_speed}
            </p>
            <p href="#" className="card-link">
              vehicle_class : {detals.vehicle_class}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
