import { useState } from "react";
export default function Contador() {
  const [count, setCount] = useState(10);
  const disminuirContador = () => setCount(count - 1);
  return (
    <div>
      <p>Decremento</p>
      <button onClick={disminuirContador}>Disminuir</button>
      <p>El contador vale {count} veces</p>
    </div>
  );
}
