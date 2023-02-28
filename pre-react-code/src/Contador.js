import { useState } from "react";
export default function Contador() {
  const [count, setCount] = useState(0);
  const aumentarContador = () => setCount(count + 1);
  return (
    <div>
      <p>Contador</p>
      <button onClick={aumentarContador}>Incrementar</button>
      <p>Me has pulsado {count} veces</p>
    </div>
  );
}
