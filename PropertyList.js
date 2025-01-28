  // PropertyList.js
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const querySnapshot = await getDocs(collection(db, "properties"));
      const propertiesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProperties(propertiesList);
    };
    fetchProperties();
  }, []);

  return (
    <div className="row">
      {properties.map(property => (
        <div key={property.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={property.photos[0]} className="card-img-top" alt={property.title} />
            <div className="card-body">
              <h5 className="card-title">{property.title}</h5>
              <p className="card-text">R$ {property.price}/noite</p>
              <a href={`/property/${property.id}`} className="btn btn-primary">Ver detalhes</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}