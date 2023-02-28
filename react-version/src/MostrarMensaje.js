import "./MostrarMensaje.css";

export default function MostrarMensaje({ number, secretNumber, score }) {
  if (secretNumber === number) {
    return <p className="message">¡Has ganado!</p>;
  } else if (score === 0) {
    <p className="message">Has perdido</p>;
  } else if (number === "") {
    return <p className="message">Empezamos a jugar...</p>;
  } else if (secretNumber > number) {
    return <p className="message">El número es más alto</p>;
  } else {
    return <p className="message">El número es más bajo</p>;
  }
}
