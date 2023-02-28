import "./MostrarMensaje.css";

export default function MostrarMensaje({ number, secretNumber }) {
  if (secretNumber === number) {
    return <p className="message">¡Has ganado!</p>;
  } else if (number === "") {
    return <p className="message">Empezamos a jugar...</p>;
  } else if (secretNumber > number) {
    return <p className="message">El número es más alto</p>;
  } else if (secretNumber < number) {
    return <p className="message">El número es más bajo</p>;
  }
}
