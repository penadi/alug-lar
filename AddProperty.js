// AddProperty.js
import { db, storage } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const docRef = await addDoc(collection(db, "properties"), {
      ...formData,
      ownerId: user.uid,
    });
    alert("Imóvel cadastrado!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Título" onChange={(e) => setFormData({...formData, title: e.target.value})} />
      <textarea placeholder="Descrição" onChange={(e) => setFormData({...formData, description: e.target.value})} />
      <input type="number" placeholder="Preço" onChange={(e) => setFormData({...formData, price: e.target.value})} />
      <button type="submit">Salvar</button>
    </form>
  );
}