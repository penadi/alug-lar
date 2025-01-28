// PropertyDetails.js
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const docRef = doc(db, "properties", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProperty(docSnap.data());
      }
    };
    fetchProperty();
  }, [id]);

  return (
    <div>
      <h1>{property?.title}</h1>
      <img src={property?.photos[0]} alt={property?.title} />
      <p>{property?.description}</p>
      <button>Agendar Visita</button>
    </div>
  );
}